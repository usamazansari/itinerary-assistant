import { Query, Resolver } from '@nestjs/graphql';

import { User } from '../../imports/entities';
import { SanityService } from '..';

@Resolver()
export class SanityResolver {
  constructor(private _service: SanityService) {}

  @Query(() => String)
  gqlSanity(): string {
    return 'GraphQL connection is configured correctly';
  }

  @Query(() => [User])
  async neo4jSanity() {
    return await this._service.neo4jSanity();
  }
}
