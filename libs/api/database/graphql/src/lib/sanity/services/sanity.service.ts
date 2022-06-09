import { Injectable } from '@nestjs/common';

import {
  Neo4jNode,
  Neo4jRelationship,
  Address,
  Coordinates,
  Demographics,
  Identification,
  Location,
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
  person: Person = new Person({ id: '' });
  demographics: Demographics[] = [];
  demographicsRelationships: DemographicsRelationship[] = [];
  socialConnections: SocialConnection[] = [];
  socialConnectionRelationships: SocialConnectionRelationship[] = [];
  address: Address = new Address({ id: '' });
  addressRelationships: AddressRelationship[] = [];
  coordinates: Coordinates[] = [];
  coordinatesRelationships: CoordinatesRelationship[] = [];
  timezones: Timezone[] = [];
  timezoneRelationships: TimezoneRelationship[] = [];
  locations: Location[] = [];
  locationRelationships: LocationRelationship[] = [];
  identifications: Identification[] = [];
  identificationRelationships: IdentificationRelationship[] = [];
  tenures: Tenure[] = [];
  tenureRelationships: TenureRelationship[] = [];

  constructor(
    private readonly _repository: SanityRepository,
    private readonly _mapNode: Neo4jNodeMapperService,
    private readonly _mapRelationship: Neo4jRelationshipMapperService
  ) {}

  async getAddress(email: string) {
    const address = await this._repository.getAddress(email);

    // this.extractModels(address);
    this.address = this.extractAddress(address);
    // this.relateModels();
    // this.processOutput();

    return this.address;
  }

  async getPerson(email: string) {
    const person = await this._repository.getPerson(email);

    // this.extractModels(person);
    this.person = this.extractPerson(person);
    // this.relateModels();
    // this.processOutput();

    return this.person;
  }

  // private extractModels(result: unknown[]): void {
  // this.person = this.extractPeople(person);
  // this.demographics = this.extractDemographics(result);
  // this.demographicsRelationships = this.extractDemographicRelationships(result);
  // this.socialConnections = this.extractSocialConnections(result);
  // this.socialConnectionRelationships = this.extractSocialConnectionRelationships(result);
  // this.addresses = this.extractAddresses(result);
  // this.addressRelationships = this.extractAddressRelationships(result);
  // this.locations = this.extractLocations(result);
  // this.locationRelationships = this.extractLocationRelationships(result);
  // this.coordinates = this.extractCoordinates(result);
  // this.coordinatesRelationships = this.extractCoordinatesRelationships(result);
  // this.timezones = this.extractTimezones(result);
  // this.timezoneRelationships = this.extractTimezoneRelationships(result);
  // this.identifications = this.extractIdentifications(result);
  // this.identificationRelationships = this.extractIdentificationRelationships(result);
  // this.tenures = this.extractTenures(result);
  // this.tenureRelationships = this.extractTenureRelationships(result);
  // }

  // private relateModels(): void {
  // this.demographics = this.demographics.map(demographic => ({
  //   ...demographic,
  //   personId:
  //     this.demographicsRelationships.find(
  //       demographicsRelationship =>
  //         demographicsRelationship.start === demographic.id
  //     )?.end ?? ''
  // }));
  // this.socialConnections = this.socialConnections.map(socialConnection => ({
  //   ...socialConnection,
  //   personId:
  //     this.socialConnectionRelationships.find(
  //       socialConnectionRelationship =>
  //         socialConnectionRelationship.start === socialConnection.id
  //     )?.end ?? ''
  // }));
  // this.addresses = this.addresses.map(address => ({
  //   ...address,
  //   personId:
  //     this.addressRelationships.find(
  //       addressRelationship => addressRelationship.start === address.id
  //     )?.end ?? ''
  // }));
  // this.locations = this.locations.map(location => ({
  //   ...location,
  //   addressId:
  //     this.locationRelationships.find(
  //       locationRelationship => locationRelationship.start === location.id
  //     )?.end ?? ''
  // }));
  // this.coordinates = this.coordinates.map(coordinate => ({
  //   ...coordinate,
  //   locationId:
  //     this.coordinatesRelationships.find(
  //       coordinatesRelationship =>
  //         coordinatesRelationship.start === coordinate.id
  //     )?.end ?? ''
  // }));
  // this.timezones = this.timezones.map(timezone => ({
  //   ...timezone,
  //   locationId:
  //     this.timezoneRelationships.find(
  //       timezoneRelationship => timezoneRelationship.start === timezone.id
  //     )?.end ?? ''
  // }));
  // this.identifications = this.identifications.map(identification => ({
  //   ...identification,
  //   personId:
  //     this.identificationRelationships.find(
  //       identificationRelationship =>
  //         identificationRelationship.start === identification.id
  //     )?.end ?? ''
  // }));
  // TODO: Usama Ansari - Relate all the other models
  // }

  // private processOutput(): void {
  // this.result = this.person;
  // }

  private extractPerson(result: unknown[]): Person {
    type Neo4jPerson = {
      person: Neo4jNode<Person>;
    };

    return (<Neo4jPerson[]>result)
      .map(({ person }) => person)
      .map(this._mapNode.toPerson)[0];
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

  private extractAddress(result: unknown[]): Address {
    type Neo4jAddress = {
      address: Neo4jNode<Address>;
    };

    return (<Neo4jAddress[]>result)
      .map(({ address }) => address)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toAddress)[0];
  }

  private extractSocialConnections(result: unknown[]): SocialConnection[] {
    type Neo4jSocialConnection = {
      socialConnection: Neo4jNode<SocialConnection>;
    };

    return (<Neo4jSocialConnection[]>result)
      .map(({ socialConnection }) => socialConnection)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toSocialConnection);
  }

  private extractLocations(result: unknown[]): Location[] {
    type Neo4jLocation = {
      location: Neo4jNode<Location>;
    };

    return (<Neo4jLocation[]>result)
      .map(({ location }) => location)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toLocation);
  }

  private extractCoordinates(result: unknown[]): Coordinates[] {
    type Neo4jCoordinates = {
      coordinates: Neo4jNode<Coordinates>;
    };

    return (<Neo4jCoordinates[]>result)
      .map(({ coordinates }) => coordinates)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toCoordinates);
  }

  private extractTimezones(result: unknown[]): Timezone[] {
    type Neo4jTimezone = {
      timezone: Neo4jNode<Timezone>;
    };

    return (<Neo4jTimezone[]>result)
      .map(({ timezone }) => timezone)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toTimezone);
  }

  private extractIdentifications(result: unknown[]): Identification[] {
    type Neo4jIdentification = {
      identification: Neo4jNode<Identification>;
    };

    return (<Neo4jIdentification[]>result)
      .map(({ identification }) => identification)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toIdentification);
  }

  private extractTenures(result: unknown[]): Tenure[] {
    type Neo4jTenure = {
      validity: Neo4jNode<Tenure>;
    };

    return (<Neo4jTenure[]>result)
      .map(({ validity }) => validity)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toTenure);
  }

  private extractDemographicRelationships(
    result: unknown[]
  ): DemographicsRelationship[] {
    type Neo4jDemographicsRelationship = {
      demographicsRelationship: Neo4jRelationship<DemographicsRelationshipData>;
    };

    return (<Neo4jDemographicsRelationship[]>result)
      .map(({ demographicsRelationship }) => demographicsRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toDemographicsRelationship);
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

  private extractSocialConnectionRelationships(
    result: unknown[]
  ): SocialConnectionRelationship[] {
    type Neo4jSocialConnectionRelationship = {
      socialConnectionRelationship: Neo4jRelationship<SocialConnectionRelationshipData>;
    };

    return (<Neo4jSocialConnectionRelationship[]>result)
      .map(({ socialConnectionRelationship }) => socialConnectionRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toSocialConnectionRelationship);
  }

  private extractLocationRelationships(
    result: unknown[]
  ): LocationRelationship[] {
    type Neo4jLocationRelationship = {
      locationRelationship: Neo4jRelationship<LocationRelationshipData>;
    };

    return (<Neo4jLocationRelationship[]>result)
      .map(({ locationRelationship }) => locationRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toLocationRelationship);
  }

  private extractCoordinatesRelationships(
    result: unknown[]
  ): CoordinatesRelationship[] {
    type Neo4jCoordinateRelationship = {
      coordinatesRelationship: Neo4jRelationship<CoordinatesRelationshipData>;
    };

    return (<Neo4jCoordinateRelationship[]>result)
      .map(({ coordinatesRelationship }) => coordinatesRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toCoordinatesRelationship);
  }

  private extractTimezoneRelationships(
    result: unknown[]
  ): TimezoneRelationship[] {
    type Neo4jTimezoneRelationship = {
      timezoneRelationship: Neo4jRelationship<TimezoneRelationshipData>;
    };

    return (<Neo4jTimezoneRelationship[]>result)
      .map(({ timezoneRelationship }) => timezoneRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toTimezoneRelationship);
  }

  private extractIdentificationRelationships(
    result: unknown[]
  ): IdentificationRelationship[] {
    type Neo4jIdentificationRelationship = {
      identificationRelationship: Neo4jRelationship<IdentificationRelationshipData>;
    };

    return (<Neo4jIdentificationRelationship[]>result)
      .map(({ identificationRelationship }) => identificationRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toIdentificationRelationship);
  }

  private extractTenureRelationships(result: unknown[]): TenureRelationship[] {
    type Neo4jTenureRelationship = {
      validityRelationship: Neo4jRelationship<TenureRelationshipData>;
    };

    return (<Neo4jTenureRelationship[]>result)
      .map(({ validityRelationship }) => validityRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toTenureRelationship);
  }
}
