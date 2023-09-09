import { NonEmptyArray } from 'type-graphql';
import { crudResolvers, ProductRelationsResolver } from '../generated/type-graphql';

export const resolvers: NonEmptyArray<Function> = [...crudResolvers, ProductRelationsResolver];
