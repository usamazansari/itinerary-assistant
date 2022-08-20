import { Connection } from 'cypher-query-builder';
import { Driver } from 'neo4j-driver';

interface INeo4jConfig {
  uri: string;
  username: string;
  password: string;
}

const Neo4jConfigStub: INeo4jConfig = {
  uri: 'neo4j://localhost:7687',
  username: 'neo4j',
  password: 'secret'
};

class Neo4jConfig implements INeo4jConfig {
  uri: string;
  username: string;
  password: string;

  constructor({
    username = Neo4jConfigStub.username,
    password = Neo4jConfigStub.password,
    uri = Neo4jConfigStub.uri
  }: Partial<Neo4jConfig>) {
    this.uri = uri;
    this.username = username;
    this.password = password;
  }
}

type ConnectionWithDriver = Connection & { driver: Driver };

type ConnectionErrorType = {
  code: string;
};

export { Neo4jConfig, ConnectionWithDriver, ConnectionErrorType };
