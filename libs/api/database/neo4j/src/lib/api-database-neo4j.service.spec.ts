import { Test } from '@nestjs/testing';
import { ApiDatabaseNeo4jService } from './api-database-neo4j.service';

describe('ApiDatabaseNeo4jService', () => {
  let service: ApiDatabaseNeo4jService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiDatabaseNeo4jService]
    }).compile();

    service = module.get(ApiDatabaseNeo4jService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
