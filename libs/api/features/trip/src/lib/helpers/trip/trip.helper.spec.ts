import { Test, TestingModule } from '@nestjs/testing';
import { TripHelper } from './trip.helper';

describe('TripHelper', () => {
  let service: TripHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripHelper]
    }).compile();

    service = module.get<TripHelper>(TripHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
