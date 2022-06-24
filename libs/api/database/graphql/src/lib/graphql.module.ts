import { Module } from '@nestjs/common';
import { GraphQLModule as NestJSGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { join } from 'path';
import { SanityResolver } from './resolvers/sanity/sanity.resolver';

@Module({
  imports: [
    NestJSGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(
        process.cwd(),
        'libs/api/database/graphql/schemas/schema.gql'
      )
    })
  ],
  providers: [SanityResolver]
})
export class GraphQLModule {}
