import { Field, ID, ObjectType } from '@nestjs/graphql';
import { isPoint, Point as Neo4jPoint } from 'neo4j-driver';
import { GraphQLScalarType } from 'graphql';

import { ICoordinates } from '../../../../imports/models';

const Point = new GraphQLScalarType({
  name: 'Point',
  description: 'Point scalar type',
  serialize: (value: unknown) => (isPoint(value) ? value : null)
});

@ObjectType()
export class Coordinates implements ICoordinates {
  @Field(() => ID)
  id!: string;

  @Field(() => Point)
  coordinates!: Neo4jPoint<number>;

  @Field({ nullable: true })
  latitude!: number;

  @Field({ nullable: true })
  longitude!: number;
}
