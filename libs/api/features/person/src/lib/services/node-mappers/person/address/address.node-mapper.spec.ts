import { Test, TestingModule } from '@nestjs/testing';
import { AddressNodeMapper } from './address.node-mapper';

describe('AddressService', () => {
  let service: AddressNodeMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressNodeMapper]
    }).compile();

    service = module.get<AddressNodeMapper>(AddressNodeMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
