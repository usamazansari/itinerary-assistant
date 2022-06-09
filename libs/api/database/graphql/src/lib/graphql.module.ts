import { Module } from '@nestjs/common';
import { GraphQLModule as NestJSGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { join } from 'path';

import { SanityRepository, SanityResolver, SanityService } from './sanity';

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
  providers: [SanityRepository, SanityResolver, SanityService]
})
export class GraphQLModule {}
