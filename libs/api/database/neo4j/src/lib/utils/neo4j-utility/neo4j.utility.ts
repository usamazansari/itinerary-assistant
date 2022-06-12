import { DateTime, types } from 'neo4j-driver';

import { Neo4jNode, Neo4jRelationship } from '../../models';

export const parseFromDateTime = (dateTime: DateTime): Date => {
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

export const parseToDateTime = (date: Date): DateTime<number> => {
  const { DateTime: DateTimeConstructor } = types;

  return new DateTimeConstructor<number>(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds() * 1000000,
    date.getTimezoneOffset() * 60
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
