import { Test, TestingModule } from '@nestjs/testing';
import { DemographicsService } from './demographics.service';

describe('DemographicsService', () => {
  let service: DemographicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemographicsService]
    }).compile();

    service = module.get<DemographicsService>(DemographicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
