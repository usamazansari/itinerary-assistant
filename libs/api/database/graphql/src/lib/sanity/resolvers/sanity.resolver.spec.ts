import { Test, TestingModule } from '@nestjs/testing';
import { SanityResolver } from './sanity.resolver';

describe('SanityResolver', () => {
  let resolver: SanityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SanityResolver]
    }).compile();

    resolver = module.get<SanityResolver>(SanityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
