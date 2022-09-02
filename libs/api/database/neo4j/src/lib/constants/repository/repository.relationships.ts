import { RelationDirection } from 'cypher-query-builder/dist/typings/clauses/relation-pattern';

enum RELATIONSHIP {
  Address = 'addressRelationship',
  Resident = 'residentRelationship',
  Accomplice = 'accompliceRelationship'
}

const RELATIONSHIP_DIRECTION = {
  EITHER: 'either' as RelationDirection,
  IN: 'in' as RelationDirection,
  OUT: 'out' as RelationDirection
};

export { RELATIONSHIP, RELATIONSHIP_DIRECTION };
