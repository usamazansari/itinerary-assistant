import { Injectable } from '@nestjs/common';

import {
  Neo4jNode,
  Neo4jRelationship,
  Address,
  Coordinates,
  Demographics,
  Identification,
  Location,
  Photo,
  Tenure,
  Timezone,
  SocialConnection,
  Person,
  AddressRelationship,
  AddressRelationshipData,
  CoordinatesRelationship,
  CoordinatesRelationshipData,
  DemographicsRelationship,
  DemographicsRelationshipData,
  IdentificationRelationship,
  IdentificationRelationshipData,
  LocationRelationship,
  LocationRelationshipData,
  PhotoRelationship,
  PhotoRelationshipData,
  SocialConnectionRelationship,
  SocialConnectionRelationshipData,
  TenureRelationship,
  TenureRelationshipData,
  TimezoneRelationship,
  TimezoneRelationshipData
} from '../../imports/models';
import {
  Neo4jNodeMapperService,
  Neo4jRelationshipMapperService
} from '../../imports/services';
import { deduplicateDictionary } from '../../imports/utils';

import { SanityRepository } from '..';

@Injectable()
export class SanityService {
  people: Person[] = [];
  demographics: Demographics[] = [];
  demographicsRelationships: DemographicsRelationship[] = [];
  socialConnections: SocialConnection[] = [];
  socialConnectionRelationships: SocialConnectionRelationship[] = [];
  addresses: Address[] = [];
  addressRelationships: AddressRelationship[] = [];
  result: Person[] = [];

  constructor(
    private readonly _repository: SanityRepository,
    private readonly _mapNode: Neo4jNodeMapperService,
    private readonly _mapRelationship: Neo4jRelationshipMapperService
  ) {}

  async neo4jSanity() {
    const result = await this._repository.neo4jSanity();

    this.extractModels(result);
    this.relateModels();
    this.processOutput();

    return this.result;
  }

  private extractModels(result: unknown[]): void {
    this.people = this.extractPeople(result);
    this.demographics = this.extractDemographics(result);
    this.demographicsRelationships =
      this.extractDemographicRelationships(result);
    this.socialConnections = this.extractSocialConnections(result);
    this.socialConnectionRelationships =
      this.extractSocialConnectionRelationships(result);
    this.addresses = this.extractAddresses(result);
    this.addressRelationships = this.extractAddressRelationships(result);
  }

  private relateModels(): void {
    this.demographics = this.demographics.map(demographic => ({
      ...demographic,
      personId:
        this.demographicsRelationships.find(
          demographicsRelationship =>
            demographicsRelationship.start === demographic.id
        )?.end ?? ''
    }));

    this.socialConnections = this.socialConnections.map(socialConnection => ({
      ...socialConnection,
      personId:
        this.socialConnectionRelationships.find(
          socialConnectionRelationship =>
            socialConnectionRelationship.start === socialConnection.id
        )?.end ?? ''
    }));

    this.addresses = this.addresses.map(address => ({
      ...address,
      personId:
        this.addressRelationships.find(
          addressRelationship => addressRelationship.start === address.id
        )?.end ?? ''
    }));
  }

  private processOutput(): void {
    this.result = this.people.map(person => ({
      ...person,
      demographics:
        this.demographics.find(
          demographics => person.id === demographics.personId
        ) ?? new Demographics({ id: person.id }),
      socialConnections:
        this.socialConnections.filter(
          socialConnection => person.id === socialConnection.personId
        ) ?? [],
      address:
        this.addresses.find(address => person.id === address.personId) ??
        new Address({ id: person.id })
    }));
  }

  private extractPeople(result: unknown[]): Person[] {
    type Neo4jPerson = {
      person: Neo4jNode<Person>;
    };

    return (<Neo4jPerson[]>result)
      .map(({ person }) => person)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toPerson);
  }

  private extractDemographics(result: unknown[]): Demographics[] {
    type Neo4jDemographics = {
      demographics: Neo4jNode<Demographics>;
    };

    return (<Neo4jDemographics[]>result)
      .map(({ demographics }) => demographics)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toDemographics);
  }

  private extractAddresses(result: unknown[]): Address[] {
    type Neo4jAddress = {
      address: Neo4jNode<Address>;
    };

    return (<Neo4jAddress[]>result)
      .map(({ address }) => address)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toAddress);
  }

  private extractSocialConnections(result: unknown[]): SocialConnection[] {
    type Neo4jSocialConnection = {
      socialConnection: Neo4jRelationship<SocialConnection>;
    };

    return (<Neo4jSocialConnection[]>result)
      .map(({ socialConnection }) => socialConnection)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toSocialConnection);
  }

  private extractAddressRelationships(
    result: unknown[]
  ): AddressRelationship[] {
    type Neo4jAddressRelationship = {
      addressRelationship: Neo4jRelationship<AddressRelationshipData>;
    };

    return (<Neo4jAddressRelationship[]>result)
      .map(({ addressRelationship }) => addressRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toAddressRelationship);
  }

  private extractDemographicRelationships(
    result: unknown[]
  ): DemographicsRelationship[] {
    type Neo4jDemographicsRelationship = {
      demographicsRelationship: Neo4jRelationship<DemographicsRelationship>;
    };

    return (<Neo4jDemographicsRelationship[]>result)
      .map(({ demographicsRelationship }) => demographicsRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toDemographicsRelationship);
  }

  private extractSocialConnectionRelationships(
    result: unknown[]
  ): SocialConnectionRelationship[] {
    type Neo4jSocialConnectionRelationship = {
      socialConnectionRelationship: Neo4jRelationship<SocialConnectionRelationship>;
    };

    return (<Neo4jSocialConnectionRelationship[]>result)
      .map(({ socialConnectionRelationship }) => socialConnectionRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toSocialConnectionRelationship);
  }
}
