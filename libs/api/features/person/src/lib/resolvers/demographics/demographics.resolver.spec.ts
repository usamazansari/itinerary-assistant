import { Test, TestingModule } from '@nestjs/testing';
import { DemographicsResolver } from './demographics.resolver';

describe('DemographicsResolver', () => {
  let resolver: DemographicsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemographicsResolver]
    }).compile();

    resolver = module.get<DemographicsResolver>(DemographicsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
