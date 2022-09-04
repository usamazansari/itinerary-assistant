import { BaseModel } from '../../imports/models';

import { Neo4jOutput } from '../../models';

/**
 * ## Extract Entity information out of Neo4j Query Output
 *
 * ### Usage Examples
 * ```ts
 * const result = [
 *   {
 *     output: { // Resembles class Neo4jNode<T>
 *       identity: '',
 *       labels: ['', ''],
 *       properties: { // Resembles class T
 *         id: '',
 *         ...props
 *       }
 *     }
 *   }
 * ]
 *
 * extractEntity<T>(result) = {
 *   id: '',
 *   ...props
 * }
 * ```
 *
 * @param r Neo4jOutput<T>
 * @returns T[]
 */
const extractEntity = <T extends BaseModel>(r: Neo4jOutput<T>) =>
  r.map(({ output: { properties: p } }) => p);

/**
 * ## Create instance of the class dynamically, with payload provided
 *
 * ### Usage Examples
 * ```ts
 * nodeMapper(Foo, { id: 'bar' }) = new Foo({ id: 'bar' })
 * ```
 *
 * @param c class whose instance must be returned
 * @param p partial payload of the class
 * @returns instance of the class `c` with payload `p`
 */
const nodeMapper = <T extends BaseModel>(
  c: { new (i: Partial<T>): T },
  p: Partial<T>
) => new c(p);

export { extractEntity, nodeMapper };
