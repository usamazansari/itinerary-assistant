import { Test, TestingModule } from '@nestjs/testing';
import { TripRepository } from './trip.repository';

describe('TripRepository', () => {
  let service: TripRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripRepository]
    }).compile();

    service = module.get<TripRepository>(TripRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
