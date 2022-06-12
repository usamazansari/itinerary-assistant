/* eslint-disable @typescript-eslint/no-explicit-any */

import { INeo4jNode, Neo4jNode } from '.';

const Timestamp = new Date().valueOf();

interface INeo4jRelationship<RelationshipData = any>
  extends INeo4jNode {
  start: string;
  end: string;
  properties: RelationshipData;
}

const Neo4jRelationshipStub: INeo4jRelationship = {
  identity: `new-relationship-${Timestamp}`,
  start: '',
  end: '',
  labels: [],
  properties: {} as any
};

export class Neo4jRelationship<RelationshipData = any>
  extends Neo4jNode
  implements INeo4jRelationship
{
  start: string;
  end: string;
  properties: RelationshipData;

  constructor({
    identity = Neo4jRelationshipStub.identity,
    start = Neo4jRelationshipStub.start,
    end = Neo4jRelationshipStub.end,
    labels = Neo4jRelationshipStub.labels,
    properties = Neo4jRelationshipStub.properties
  }: Partial<INeo4jRelationship>) {
    super({ identity, labels, properties });
    this.identity = identity;
    this.start = start;
    this.end = end;
    this.labels = labels;
    this.properties = properties;
  }
}
