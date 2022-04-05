import { Connection } from 'cypher-query-builder';
import { Driver } from 'neo4j-driver';

export enum Neo4jScheme {
  NEO4J = 'neo4j',
  NEO4J_SECURE = 'neo4j+s',
  NEO4J_SECURE_SELF_SIGNED = 'neo4j+ssc',
  BOLT = 'bolt',
  BOLT_SECURE = 'bolt+s',
  BOLT_SECURE_SELF_SIGNED = 'bolt+ssc'
}

interface INeo4jConfig {
  scheme: Neo4jScheme;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}

const Neo4jConfigStub: INeo4jConfig = {
  scheme: Neo4jScheme.NEO4J,
  host: 'localhost',
  port: 7687,
  database: 'neo4j',
  username: 'neo4j',
  password: 'secret'
};

export class Neo4jConfig implements INeo4jConfig {
  scheme: Neo4jScheme;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;

  constructor({
    scheme = Neo4jConfigStub.scheme,
    host = Neo4jConfigStub.host,
    port = Neo4jConfigStub.port,
    database = Neo4jConfigStub.database,
    username = Neo4jConfigStub.username,
    password = Neo4jConfigStub.password
  }: Partial<INeo4jConfig>) {
    this.scheme = scheme;
    this.host = host;
    this.port = port;
    this.database = database;
    this.username = username;
    this.password = password;
  }
}

export type ConnectionWithDriver = Connection & { driver: Driver };

export type ConnectionErrorType = {
  code: string;
};
