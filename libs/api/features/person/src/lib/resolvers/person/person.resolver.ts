import { Query, Resolver } from '@nestjs/graphql';

import { PersonEntity as Entity } from '../../entities';
import { PersonService } from '../../services';

@Resolver(() => Entity)
export class PersonResolver {
  constructor(private _service: PersonService) {}

  @Query(() => [Entity])
  async getPeople() {
    return await this._service.getPeople();
  }
}
