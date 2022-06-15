import { Test, TestingModule } from '@nestjs/testing';
import { TenureResolver } from './tenure.resolver';

describe('TenureResolver', () => {
  let resolver: TenureResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenureResolver]
    }).compile();

    resolver = module.get<TenureResolver>(TenureResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
