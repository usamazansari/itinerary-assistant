import { Neo4jNode, Neo4jRelationship } from '../../models';

/**
 * @deprecated - Avoid using this function. If you are still using it, you need
 * to make some changes in you query.
 *
 * @param {(Neo4jNode | Neo4jRelationship)} dictionary
 * @param {unknown} index
 * @param {(Neo4jNode[] | Neo4jRelationship[])} array
 * @return {*}  {boolean}
 */
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
