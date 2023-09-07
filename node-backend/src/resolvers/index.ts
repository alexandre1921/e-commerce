import { NonEmptyArray } from 'type-graphql';
import { crudResolvers } from '../generated/type-graphql';

export const resolvers: NonEmptyArray<Function> = crudResolvers;
