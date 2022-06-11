import { Test, TestingModule } from '@nestjs/testing';
import { AddressResolver } from './address.resolver';

describe('AddressResolver', () => {
  let resolver: AddressResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressResolver]
    }).compile();

    resolver = module.get<AddressResolver>(AddressResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
