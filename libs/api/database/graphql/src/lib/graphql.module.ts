import { Module } from '@nestjs/common';
import { GraphQLModule as GQL } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { join } from 'path';

@Module({
  imports: [
    GQL.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(
        process.cwd(),
        'libs/api/database/graphql/src/lib/schemas/schema.gql'
      )
    })
  ]
})
export class GraphQLModule {}
