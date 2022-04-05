import { Test, TestingModule } from '@nestjs/testing';
import { QueryRepositoryService } from './query-repository.service';

describe('QueryService', () => {
  let service: QueryRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryRepositoryService]
    }).compile();

    service = module.get<QueryRepositoryService>(
      QueryRepositoryService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
