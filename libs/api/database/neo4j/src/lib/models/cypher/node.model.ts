/* eslint-disable @typescript-eslint/no-explicit-any */

export interface INeo4jNode<T = any> {
  identity: string;
  labels: string[];
  properties: T;
}

const Neo4jNodeStub: INeo4jNode = {
  identity: '',
  labels: [],
  properties: {} as any
};

export class Neo4jNode<T = any> implements INeo4jNode {
  identity: string;
  labels: string[];
  properties: T;

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
