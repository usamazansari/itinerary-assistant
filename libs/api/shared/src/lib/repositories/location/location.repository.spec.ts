import { Test, TestingModule } from '@nestjs/testing';
import { LocationRepository } from './location.repository';

describe('LocationRepository', () => {
  let service: LocationRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationRepository]
    }).compile();

    service = module.get<LocationRepository>(LocationRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
