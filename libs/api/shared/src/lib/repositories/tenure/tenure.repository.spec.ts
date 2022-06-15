import { Test, TestingModule } from '@nestjs/testing';
import { TenureRepository } from './tenure.repository';

describe('TenureRepository', () => {
  let service: TenureRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenureRepository]
    }).compile();

    service = module.get<TenureRepository>(TenureRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
