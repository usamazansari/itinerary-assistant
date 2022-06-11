import { Test, TestingModule } from '@nestjs/testing';
import { AddressRepository } from './address.repository';

describe('AddressRepositoryService', () => {
  let service: AddressRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressRepository]
    }).compile();

    service = module.get<AddressRepository>(AddressRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
