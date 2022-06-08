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
  coordinates: Coordinates[] = [];
  coordinatesRelationships: CoordinatesRelationship[] = [];
  timezones: Timezone[] = [];
  timezoneRelationships: TimezoneRelationship[] = [];
  locations: Location[] = [];
  locationRelationships: LocationRelationship[] = [];
  identifications: Identification[] = [];
  identificationRelationships: IdentificationRelationship[] = [];
  photos: Photo[] = [];
  photoRelationships: PhotoRelationship[] = [];
  tenures: Tenure[] = [];
  tenureRelationships: TenureRelationship[] = [];

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
    this.locations = this.extractLocations(result);
    this.locationRelationships = this.extractLocationRelationships(result);
    this.coordinates = this.extractCoordinates(result);
    this.coordinatesRelationships =
      this.extractCoordinatesRelationships(result);
    this.timezones = this.extractTimezones(result);
    this.timezoneRelationships = this.extractTimezoneRelationships(result);
    this.identifications = this.extractIdentifications(result);
    this.identificationRelationships =
      this.extractIdentificationRelationships(result);
    // this.photos = this.extractPhotos(result);
    // this.photoRelationships = this.extractPhotoRelationships(result);
    // this.tenures = this.extractTenures(result);
    // this.tenureRelationships = this.extractTenureRelationships(result);
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

    this.locations = this.locations.map(location => ({
      ...location,
      addressId:
        this.locationRelationships.find(
          locationRelationship => locationRelationship.start === location.id
        )?.end ?? ''
    }));

    this.coordinates = this.coordinates.map(coordinate => ({
      ...coordinate,
      locationId:
        this.coordinatesRelationships.find(
          coordinatesRelationship =>
            coordinatesRelationship.start === coordinate.id
        )?.end ?? ''
    }));

    this.timezones = this.timezones.map(timezone => ({
      ...timezone,
      locationId:
        this.timezoneRelationships.find(
          timezoneRelationship => timezoneRelationship.start === timezone.id
        )?.end ?? ''
    }));

    this.identifications = this.identifications.map(identification => ({
      ...identification,
      personId:
        this.identificationRelationships.find(
          identificationRelationship =>
            identificationRelationship.start === identification.id
        )?.end ?? ''
    }));

    // TODO: Usama Ansari - Relate all the other models
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
        ) ?? []
      // address:
      //   this.addresses.find(address => person.id === address.residentIds) ??
      //   new Address({ id: person.id })
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

  private extractPhotos(result: unknown[]): Photo[] {
    type Neo4jPhoto = {
      photo: Neo4jNode<Photo>;
    };

    return (<Neo4jPhoto[]>result)
      .map(({ photo }) => photo)
      .filter(deduplicateDictionary)
      .map(this._mapNode.toPhoto);
  }

  private extractTenures(result: unknown[]): Tenure[] {
    type Neo4jTenure = {
      tenure: Neo4jNode<Tenure>;
    };

    return (<Neo4jTenure[]>result)
      .map(({ tenure }) => tenure)
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

  private extractPhotoRelationships(result: unknown[]): PhotoRelationship[] {
    type Neo4jPhotoRelationship = {
      photoRelationship: Neo4jRelationship<PhotoRelationshipData>;
    };

    return (<Neo4jPhotoRelationship[]>result)
      .map(({ photoRelationship }) => photoRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toPhotoRelationship);
  }

  private extractTenureRelationships(result: unknown[]): TenureRelationship[] {
    type Neo4jTenureRelationship = {
      tenureRelationship: Neo4jRelationship<TenureRelationshipData>;
    };

    return (<Neo4jTenureRelationship[]>result)
      .map(({ tenureRelationship }) => tenureRelationship)
      .filter(deduplicateDictionary)
      .map(this._mapRelationship.toTenureRelationship);
  }
}
