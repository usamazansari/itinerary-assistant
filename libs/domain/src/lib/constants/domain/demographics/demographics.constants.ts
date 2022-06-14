import { registerEnumType } from '@nestjs/graphql';

export enum Salutation {
  MISTER = 'Mr.',
  MISTRESS = 'Mrs.',
  MISS = 'Ms.',
  DOCTOR = 'Dr.'
}

registerEnumType(Salutation, {
  name: 'Salutation',
  description: 'The salutation associated with the demographics of the person'
});
