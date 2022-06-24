import { Field, InputType } from '@nestjs/graphql';

// import { SocialConnection } from '../../imports/entities';

@InputType()
// export class SocialConnectionInput extends SocialConnection {
export class SocialConnectionInput {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  name!: string;

  @Field({ nullable: true })
  url!: string;
}
