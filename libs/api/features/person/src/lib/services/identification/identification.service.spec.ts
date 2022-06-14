import { Test, TestingModule } from '@nestjs/testing';
import { IdentificationService } from './identification.service';

describe('IdentificationService', () => {
  let service: IdentificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentificationService]
    }).compile();

    service = module.get<IdentificationService>(IdentificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
