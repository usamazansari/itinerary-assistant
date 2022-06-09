import { Query, Resolver } from '@nestjs/graphql';

import { Person } from '../../imports/entities';
import { PersonService } from '../../services';

@Resolver(() => [Person])
export class PeopleResolver {
  constructor(private _service: PersonService) {}

  @Query(() => [Person])
  async getPeople(): Promise<Person[]> {
    return await this._service.getPeople();
  }
}
