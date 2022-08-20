import { Test, TestingModule } from '@nestjs/testing';
import { AddressHelper } from './address.helper';

describe('AddressHelper', () => {
  let service: AddressHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressHelper]
    }).compile();

    service = module.get<AddressHelper>(AddressHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
