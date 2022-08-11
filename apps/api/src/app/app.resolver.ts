import { Query, Resolver } from '@nestjs/graphql';

import { Person as Entity } from './imports/entities';
import { Person } from './imports/models';
import { EramPerson, UsamaPerson } from './imports/seed';

@Resolver()
export class AppResolver {
  @Query(() => Entity)
  gqlSanity() {
    const people: Person[] = [UsamaPerson, EramPerson];
    return Math.random() > 0.5 ? people[0] : people[1];
  }
}
