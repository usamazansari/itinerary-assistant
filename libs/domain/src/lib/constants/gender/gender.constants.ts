import { registerEnumType } from '@nestjs/graphql';

export enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  OTHER = 'OTHER'
}

registerEnumType(Gender, {
  name: 'Gender',
  description: 'The gender of the person'
});
