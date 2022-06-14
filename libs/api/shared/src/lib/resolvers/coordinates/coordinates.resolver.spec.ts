import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesResolver } from './coordinates.resolver';

describe('CoordinatesResolver', () => {
  let resolver: CoordinatesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoordinatesResolver]
    }).compile();

    resolver = module.get<CoordinatesResolver>(CoordinatesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
