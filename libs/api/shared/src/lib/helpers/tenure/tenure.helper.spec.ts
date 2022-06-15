import { Test, TestingModule } from '@nestjs/testing';
import { TenureHelper } from './tenure.helper';

describe('LocationService', () => {
  let service: TenureHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenureHelper]
    }).compile();

    service = module.get<TenureHelper>(TenureHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
