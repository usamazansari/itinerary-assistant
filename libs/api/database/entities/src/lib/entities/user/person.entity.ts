import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Gender } from '../imports/constants';
import {
  IPerson,
  Demographics as DemographicsModel,
  Identification as IdentificationModel,
  SocialConnection as SocialConnectionModel
} from '../imports/models';
import {
  Identification as IdentificationEntity,
  Demographics as DemographicsEntity,
  SocialConnection as SocialConnectionEntity
} from '.';

@ObjectType()
export class Person implements IPerson {
  @Field(() => ID)
  id!: string;

  @Field()
  fullName!: string;

  @Field(() => DemographicsEntity)
  demographics!: DemographicsModel;

  @Field()
  email!: string;

  @Field()
  phone!: string;

  @Field()
  dateOfBirth!: Date;

  @Field(() => Gender)
  gender!: Gender;

  @Field()
  website!: string;

  @Field(() => [IdentificationEntity])
  identifications!: IdentificationModel[];

  @Field(() => [SocialConnectionEntity])
  socialConnections!: SocialConnectionModel[];
}
