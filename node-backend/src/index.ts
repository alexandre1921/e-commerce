// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { GraphQLScalarType } from 'graphql';

import { createServer, serverErrorHandler, listenServer, addMiddlewaresAndRoutes } from 'utils/server';
// eslint-disable-next-line import/order
import { applicationPort as port, schemaFilePath as emitSchemaFile } from 'config/server';
import { DateTimeResolver, JWTResolver } from 'graphql-scalars';
import { resolvers } from './resolvers';

buildSchema({
  resolvers,
  emitSchemaFile,
  scalarsMap: [
    { type: GraphQLScalarType, scalar: DateTimeResolver },
    { type: GraphQLScalarType, scalar: JWTResolver },
  ],
})
  .then(createServer)
  .then(addMiddlewaresAndRoutes)
  .then(listenServer(port))
  .catch(serverErrorHandler);
