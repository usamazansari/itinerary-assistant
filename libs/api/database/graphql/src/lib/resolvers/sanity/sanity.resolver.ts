import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { SanityEntity } from '../../imports/entities';
import { Sanity } from '../../imports/models';
import { Neo4jQueryRepositoryService } from '../../imports/services';

@Resolver(() => String)
export class SanityResolver {
  constructor(private _query: Neo4jQueryRepositoryService) {}

  @Query(() => String, {
    description:
      'Test connectivity with the backend. Return a number from backend service which is even, throws an error if odd'
  })
  stringSanity(): string {
    const value = (Math.random() * 10) >> 0;
    if (!(value % 2)) return `Response from Sanity Resolver : ${value}`;
    throw new Error(`Error from Sanity Resolver: ${value} not divisible by 2`);
  }

  @Query(() => SanityEntity, {
    description:
      'Test connectivity with the backend. Return a number wrapped in a class from backend service which is even, throws an error if odd'
  })
  classSanity(@Args('number', { type: () => Int }) number: number): Sanity {
    if (!(number % 2))
      return new Sanity({
        message: `Response from Sanity Resolver : ${number}`
      });
    throw new Error(`${number} not divisible by 2`);
  }
}
