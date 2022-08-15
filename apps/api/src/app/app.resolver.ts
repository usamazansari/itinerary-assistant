import { Query, Resolver } from '@nestjs/graphql';

import { Person as Entity } from './imports/entities';
import { Person } from './imports/models';
import { EramPerson, UsamaPerson } from './imports/seed';

const people: Person[] = [UsamaPerson, EramPerson];

@Resolver(() => Entity)
export class AppResolver {
  @Query(() => Entity)
  gqlSanity() {
    return Math.random() > 0.5 ? people[0] : people[1];
  }
}
