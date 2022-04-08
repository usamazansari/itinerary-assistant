import { Test, TestingModule } from '@nestjs/testing';
import { Neo4jUtility } from './neo4j.utility';

describe('Neo4jUtilityService', () => {
  let service: Neo4jUtility;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Neo4jUtility]
    }).compile();

    service = module.get<Neo4jUtility>(Neo4jUtility);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
