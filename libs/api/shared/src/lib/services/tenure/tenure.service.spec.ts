import { Test, TestingModule } from '@nestjs/testing';
import { TenureService } from './tenure.service';

describe('TenureService', () => {
  let service: TenureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenureService]
    }).compile();

    service = module.get<TenureService>(TenureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
