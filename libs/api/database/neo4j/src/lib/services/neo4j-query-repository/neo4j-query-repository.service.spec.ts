import { Test, TestingModule } from '@nestjs/testing';
import { Neo4jQueryRepositoryService } from './neo4j-query-repository.service';

describe('Neo4jQueryRepositoryService', () => {
  let service: Neo4jQueryRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Neo4jQueryRepositoryService]
    }).compile();

    service = module.get<Neo4jQueryRepositoryService>(
      Neo4jQueryRepositoryService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
