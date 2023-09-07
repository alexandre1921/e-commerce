<h1 align="center">
  e-commerce-back-end
</h1>
<h5 align="center">
 E commerce platform developed <br/> using Node.js, Typescript, Prisma and Apollo GraphQL.
</h4>

### Technologies

This project was developed, using the following technologies:

- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Express](https://expressjs.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Prisma](https://www.prisma.io/)
- [Apollo GraphQL](https://new.apollographql.com)

## How To Use

To run this application, you'll need:
- [Git](https://git-scm.com) - To versioning and download the project
- [Npm](https://www.npmjs.com) - To manage your packages
- [Node.js](https://nodejs.org) - To run back and front
- [Mysql](https://www.mysql.com) - To save the data

### Setup your env
Create an env file for backend
- Create an env file and complete the correct configuration for each field, tip you can use the .env.example
```bash
      $ cp .env.example .env
```

### Finally, run the application
```bash
      $ npm run dev
```

### Success 🚀. The app is running.
```bash
$ npm run dev

> e-commerce-backend@1.0.0 startup
> npm i && npm run db-startup


up to date, audited 660 packages in 3s

148 packages are looking for funding
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.

> e-commerce-backend@1.0.0 db-startup
> npm run migrate && npm run generate


> e-commerce-backend@1.0.0 migrate
> npx prisma migrate dev

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": MySQL database "e-commerce-db" at "mysql-db:3306"

Already in sync, no schema change or pending migration was found.

✔ Generated Prisma Client (v5.2.0) to ./node_modules/@prisma/client in 60ms
✔ Generated TypeGraphQL integration to ./src/generated/type-graphql in 1.06s



> e-commerce-backend@1.0.0 generate
> npx prisma generate

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (v5.2.0) to ./node_modules/@prisma/client in 59ms

✔ Generated TypeGraphQL integration to ./src/generated/type-graphql in 1.08s
Start using Prisma Client in Node.js (See: https://pris.ly/d/client)

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

or start using Prisma Client at the edge (See: https://pris.ly/d/accelerate)

import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()


See other ways of importing Prisma Client: http://pris.ly/d/importing-client

npm notice
npm notice New major version of npm available! 9.6.7 -> 10.0.0
npm notice Changelog: <https://github.com/npm/cli/releases/tag/v10.0.0>
npm notice Run `npm install -g npm@10.0.0` to update!
npm notice
[INFO] 03:55:34 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 5.0.4)

    Server ready at: http://localhost:4000
    See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api
```

### IMPORTANT!!!
Check the environment you are trying to run the application, for instance in docker, you need to use the container name as host but without docker you need to use localhost to access the database.
