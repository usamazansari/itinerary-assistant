import { Test, TestingModule } from '@nestjs/testing';
import { IdentificationHelper } from './identification.helper';

describe('IdentificationHelper', () => {
  let service: IdentificationHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentificationHelper]
    }).compile();

    service = module.get<IdentificationHelper>(IdentificationHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
