import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';

import { GraphQLSchema } from 'graphql';
import cors from 'cors';
import http from 'http';
import bodyParser from 'body-parser';

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import { applicationOrigin } from 'config/server';
import { ApolloServer, BaseContext } from '@apollo/server';
import { defaultContext } from './context';

export const createServer = async (schema: GraphQLSchema) => {
  const app = express();
  const httpServer = http.createServer(app);
  const isDev = process.env.NODE_ENV !== 'production';
  const plugins = [ApolloServerPluginDrainHttpServer({ httpServer })];
  !isDev && plugins.push(ApolloServerPluginLandingPageDisabled());

  const server = new ApolloServer({
    schema,
    introspection: isDev,
    plugins,
  });

  await server.start();

  return { app, server, httpServer };
};

const context = async () => defaultContext;

const applyMiddlewares = (app: express.Application, server: ApolloServer<BaseContext>) => {
  app.use(
    '/graphql',
    cors<cors.CorsRequest>({
      credentials: true,
      origin: applicationOrigin,
      methods: 'GET,HEAD,POST',
      preflightContinue: false,
    }),
    bodyParser.json(),
    expressMiddleware(server, { context }),
  );
};

export const addMiddlewaresAndRoutes = ({ app, server, httpServer }: Awaited<ReturnType<typeof createServer>>) => {
  applyMiddlewares(app, server);

  return httpServer;
};

export const listenServer = (port: string) => async (httpServer: ReturnType<typeof addMiddlewaresAndRoutes>) => {
  await new Promise<void>(resolve => {
    httpServer.listen({ port: 4000 }, resolve);
  });

  console.log(`
    Server ready at: http://localhost:${port}
    See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api`);
};

export const serverErrorHandler = (error: Error) => {
  console.log(error);
};
