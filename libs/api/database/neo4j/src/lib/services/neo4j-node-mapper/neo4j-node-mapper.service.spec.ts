import { Test, TestingModule } from '@nestjs/testing';
import { Neo4jNodeMapperService } from './neo4j-node-mapper.service';

describe('Neo4jNodeMapperService', () => {
  let service: Neo4jNodeMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Neo4jNodeMapperService]
    }).compile();

    service = module.get<Neo4jNodeMapperService>(Neo4jNodeMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
