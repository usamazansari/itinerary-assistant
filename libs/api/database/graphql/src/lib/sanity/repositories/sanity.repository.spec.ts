import { Test, TestingModule } from '@nestjs/testing';
import { SanityRepository } from './sanity.repository';

describe('SanityRepository', () => {
  let service: SanityRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SanityRepository]
    }).compile();

    service = module.get<SanityRepository>(SanityRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
