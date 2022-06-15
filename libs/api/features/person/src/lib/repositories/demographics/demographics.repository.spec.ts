import { Test, TestingModule } from '@nestjs/testing';
import { DemographicsRepository } from './demographics.repository';

describe('IdentificationService', () => {
  let service: DemographicsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemographicsRepository]
    }).compile();

    service = module.get<DemographicsRepository>(DemographicsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
