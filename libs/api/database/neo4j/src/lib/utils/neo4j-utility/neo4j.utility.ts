import { DateTime } from 'neo4j-driver';

import { Neo4jNode, Neo4jRelationship } from '../../models';

export const parseDateTime = (dateTime: DateTime): Date => {
  const { year, month, day, hour, minute, second, nanosecond } = dateTime;

  return new Date(
    +year || 1970,
    (+month || 1) - 1,
    +day || 1,
    +hour || 0,
    +minute || 0,
    +second || 0,
    (+nanosecond || 0) / 1000000
  );
};

export const deduplicateDictionary = (
  dictionary: Neo4jNode | Neo4jRelationship,
  index: unknown,
  array: Neo4jNode[] | Neo4jRelationship[]
): boolean => {
  return (
    array.findIndex(arrayItem => arrayItem.identity === dictionary.identity) ===
    index
  );
};
