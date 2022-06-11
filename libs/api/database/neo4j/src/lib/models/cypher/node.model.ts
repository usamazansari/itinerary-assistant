/* eslint-disable @typescript-eslint/no-explicit-any */

const Timestamp = new Date().valueOf();

export interface INeo4jNode<NodeData = any> {
  identity: string;
  labels: string[];
  properties: NodeData;
}

const Neo4jNodeStub: INeo4jNode = {
  identity: `new-node-${Timestamp}`,
  labels: [],
  properties: {} as any
};

export class Neo4jNode<NodeData = any> implements INeo4jNode {
  identity: string;
  labels: string[];
  properties: NodeData;

  constructor({
    identity = Neo4jNodeStub.identity,
    labels = Neo4jNodeStub.labels,
    properties = Neo4jNodeStub.properties
  }: Partial<INeo4jNode>) {
    this.identity = identity;
    this.labels = labels;
    this.properties = properties;
  }
}
