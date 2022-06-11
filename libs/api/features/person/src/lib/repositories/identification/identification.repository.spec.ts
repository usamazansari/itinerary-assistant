import { Test, TestingModule } from '@nestjs/testing';
import { IdentificationRepository } from './identification.repository';

describe('IdentificationService', () => {
  let service: IdentificationRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdentificationRepository]
    }).compile();

    service = module.get<IdentificationRepository>(IdentificationRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
