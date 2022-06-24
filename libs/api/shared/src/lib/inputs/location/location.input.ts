import { Field, InputType } from '@nestjs/graphql';

// import { Location } from '../../imports/entities';

@InputType()
// export class LocationInput extends Location {
export class LocationInput {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  plusCode!: string;
}
