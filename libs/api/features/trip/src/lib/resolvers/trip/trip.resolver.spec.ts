import { Test, TestingModule } from '@nestjs/testing';
import { TripResolver } from './trip.resolver';

describe('TripResolver', () => {
  let resolver: TripResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripResolver]
    }).compile();

    resolver = module.get<TripResolver>(TripResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
