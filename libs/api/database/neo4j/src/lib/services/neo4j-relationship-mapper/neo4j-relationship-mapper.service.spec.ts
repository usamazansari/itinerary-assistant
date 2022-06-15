import { Test, TestingModule } from '@nestjs/testing';
import { Neo4jRelationshipMapperService } from './neo4j-relationship-mapper.service';

describe('Neo4jRelationshipMapperService', () => {
  let service: Neo4jRelationshipMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Neo4jRelationshipMapperService]
    }).compile();

    service = module.get<Neo4jRelationshipMapperService>(
      Neo4jRelationshipMapperService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
