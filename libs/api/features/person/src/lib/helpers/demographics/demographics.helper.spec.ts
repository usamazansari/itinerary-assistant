import { Test, TestingModule } from '@nestjs/testing';
import { DemographicsHelper } from './demographics.helper';

describe('DemographicsHelper', () => {
  let service: DemographicsHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemographicsHelper]
    }).compile();

    service = module.get<DemographicsHelper>(DemographicsHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
