import { Module } from '@nestjs/common';
import { GraphQLModule as NestJSGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    NestJSGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true
    })
  ]
})
export class GraphQLModule {}
