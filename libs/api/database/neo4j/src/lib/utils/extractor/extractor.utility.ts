import { BaseModel } from '../../imports/models';

import { Neo4jOutput } from '../../models';

const extractEntity = <T = unknown>(r: Neo4jOutput<T>) =>
  r.map(({ output: { properties: p } }) => p);

const nodeMapper = <T extends BaseModel>(
  c: { new (i: Partial<T>): T },
  p: Partial<T>
) => new c(p);

export { extractEntity, nodeMapper };
