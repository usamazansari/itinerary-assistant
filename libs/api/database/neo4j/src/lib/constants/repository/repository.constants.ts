import { RelationDirection } from 'cypher-query-builder/dist/typings/clauses/relation-pattern';

enum VARIABLE {
  Address = 'address',
  Person = 'person'
}

enum RELATIONSHIP {
  Address = 'addressRelationship'
}

const RELATIONSHIP_DIRECTION = {
  EITHER: 'either' as RelationDirection,
  IN: 'in' as RelationDirection,
  OUT: 'out' as RelationDirection
};

enum LABEL {
  Address = 'ADDRESS',
  AddressOf = 'ADDRESS_OF',
  Person = 'PERSON'
}

const REPOSITORY_CONSTANTS = {
  LABEL,
  RELATIONSHIP_DIRECTION,
  RELATIONSHIP,
  VARIABLE
};

export { REPOSITORY_CONSTANTS };
