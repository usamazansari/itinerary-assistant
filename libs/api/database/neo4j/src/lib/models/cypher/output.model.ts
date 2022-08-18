/* eslint-disable @typescript-eslint/no-explicit-any */
import { Neo4jNode } from './node.model';

interface INeo4jOutputDatum<T = any> {
  output: Neo4jNode<T>;
}

const Neo4jOutputDatumStub: INeo4jOutputDatum<unknown> = {
  output: new Neo4jNode<unknown>({})
};

class Neo4jOutputDatum<T = any> implements INeo4jOutputDatum<unknown> {
  output: Neo4jNode<T>;

  constructor({
    output = Neo4jOutputDatumStub.output
  }: Partial<INeo4jOutputDatum>) {
    this.output = output;
  }
}

export type Neo4jOutput<T = unknown> = Neo4jOutputDatum<T>[];
