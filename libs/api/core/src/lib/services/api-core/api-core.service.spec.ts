import { Test, TestingModule } from '@nestjs/testing';
import { ApiCoreService } from './api-core.service';

describe('ApiCoreService', () => {
  let service: ApiCoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiCoreService]
    }).compile();

    service = module.get<ApiCoreService>(ApiCoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
