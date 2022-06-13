import { Test, TestingModule } from '@nestjs/testing';
import { LocationHelper } from './location.service';

describe('LocationService', () => {
  let service: LocationHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationHelper]
    }).compile();

    service = module.get<LocationHelper>(LocationHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
