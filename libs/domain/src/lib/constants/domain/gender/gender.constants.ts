import { registerEnumType } from '@nestjs/graphql';

export enum Gender {
  Female = 'female',
  Male = 'male',
  Other = 'other'
}

registerEnumType(Gender, {
  name: 'Gender',
  description: 'The gender of the person'
});
