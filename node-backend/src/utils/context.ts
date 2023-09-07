import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
export interface Context {
  prisma: typeof prisma;
}

export const defaultContext: Context = {
  prisma,
};
