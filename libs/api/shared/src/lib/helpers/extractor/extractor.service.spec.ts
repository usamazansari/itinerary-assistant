import { Test, TestingModule } from '@nestjs/testing';
import { ExtractorService } from './extractor.service';

describe('ExtractorService', () => {
  let service: ExtractorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtractorService]
    }).compile();

    service = module.get<ExtractorService>(ExtractorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
