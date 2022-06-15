/* eslint-disable @typescript-eslint/no-explicit-any */
import { Neo4jNode } from './node.model';

interface INeo4jOutputDatum<NodeData = any> {
  output: Neo4jNode<NodeData>;
}

const Neo4jOutputDatumStub: INeo4jOutputDatum<unknown> = {
  output: new Neo4jNode<unknown>({})
};

class Neo4jOutputDatum<NodeData = any> implements INeo4jOutputDatum<unknown> {
  output: Neo4jNode<NodeData>;

  constructor({
    output = Neo4jOutputDatumStub.output
  }: Partial<INeo4jOutputDatum>) {
    this.output = output;
  }
}

export type Neo4jOutput<NodeData = unknown> = Neo4jOutputDatum<NodeData>[];
