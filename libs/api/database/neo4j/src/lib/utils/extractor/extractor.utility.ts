import { Neo4jOutput } from '../../models';

import { BaseModel } from '../../imports/models';

// TODO: Usama Ansari - Documentation Required!

const extractEntity = <T = unknown>(r: Neo4jOutput<T>) =>
  r.map(({ output: o }) => o);

const nodeMapper = <T extends BaseModel>(
  c: { new (i: Partial<T>): T },
  p: Partial<T>
) => new c(p);

export { extractEntity, nodeMapper };
