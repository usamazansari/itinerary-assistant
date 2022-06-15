import { RelationDirection } from 'cypher-query-builder/dist/typings/clauses/relation-pattern';

enum Variables {
  Address = 'address',
  Coordinates = 'Coordinates',
  Demographics = 'demographics',
  Identification = 'identification',
  Location = 'location',
  Output = 'output',
  Person = 'person',
  SocialConnection = 'socialConnection',
  Tenure = 'tenure'
}

enum Relationships {
  Address = 'addressRelationship',
  Coordinates = 'coordinatesRelationship',
  Demographics = 'demographicRelationship',
  Identification = 'identificationRelationship',
  Location = 'locationRelationship',
  Resident = 'residentRelationship',
  SocialConnection = 'socialConnectionRelationship',
  Tenure = 'tenureRelationship'
}

const RelationshipDirection = {
  EITHER: 'either' as RelationDirection,
  IN: 'in' as RelationDirection,
  OUT: 'out' as RelationDirection
};

enum Labels {
  Address = 'ADDRESS',
  AddressOf = 'ADDRESS_OF',
  Coordinates = 'COORDINATES',
  CoordinatesOf = 'COORDINATES_OF',
  Demographics = 'DEMOGRAPHICS',
  DemographicsOf = 'DEMOGRAPHICS_OF',
  HasLocation = 'HAS_LOCATION',
  HasValidity = 'HAS_VALIDITY',
  Identification = 'IDENTIFICATION',
  IdentificationOf = 'IDENTIFICATION_OF',
  Location = 'LOCATION',
  Person = 'PERSON',
  SocialConnection = 'SOCIAL_CONNECTION',
  SocialConnectionOf = 'SOCIAL_CONNECTION_OF',
  Tenure = 'TENURE'
}

export const REPOSITORY_CONSTANTS = {
  Labels,
  RelationshipDirection,
  Relationships,
  Variables
};
