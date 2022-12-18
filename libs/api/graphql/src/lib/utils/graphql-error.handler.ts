import { GraphQLError, GraphQLFormattedError } from 'graphql';

const formatError = ({ message }: GraphQLError) =>
  ({
    message
  } as GraphQLFormattedError);

export { formatError };
