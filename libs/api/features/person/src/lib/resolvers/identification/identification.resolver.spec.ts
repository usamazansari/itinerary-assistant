import { Test, TestingModule } from '@nestjs/testing';
import { IdentificationResolver } from './identification.resolver';

describe('IdentificationResolver', () => {
  let resolver: IdentificationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentificationResolver]
    }).compile();

    resolver = module.get<IdentificationResolver>(IdentificationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
