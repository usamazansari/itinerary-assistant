import { Test, TestingModule } from '@nestjs/testing';
import { SanityService } from './sanity.service';

describe('SanityService', () => {
  let service: SanityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SanityService]
    }).compile();

    service = module.get<SanityService>(SanityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
