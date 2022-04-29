import { registerEnumType } from '@nestjs/graphql';

export enum Salutation {
  Mister = 'Mr.',
  Mistress = 'Mrs.',
  Miss = 'Ms.',
  Doctor = 'Dr.'
}

registerEnumType(Salutation, {
  name: 'Salutation',
  description: 'The salutation associated with the demographics of the person'
});
