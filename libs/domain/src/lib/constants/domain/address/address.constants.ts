import { registerEnumType } from '@nestjs/graphql';

export enum AddressType {
  RENT = 'RENT',
  OWNER = 'OWNER'
}

export enum RentFrequency {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY'
}

registerEnumType(AddressType, {
  name: 'AddressType',
  description: 'The type of address'
});

registerEnumType(RentFrequency, {
  name: 'RentFrequency',
  description: 'The frequency of rent'
});
