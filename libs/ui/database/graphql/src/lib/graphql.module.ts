import { NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import {
  CreatePersonGQL,
  DeletePersonGQL,
  GetPersonGQL,
  GetPeopleGQL,
  UpdatePersonGQL
} from './generated-endpoints';

const uri = 'http://localhost:3333/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<unknown> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    },
    CreatePersonGQL,
    DeletePersonGQL,
    GetPersonGQL,
    GetPeopleGQL,
    UpdatePersonGQL
  ]
})
export class GraphQLModule {}
