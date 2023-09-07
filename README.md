<h1 align="center">
  e-commerce
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
- [TailwindCSS](https://tailwindcss.com)
- [Flowbite](https://www.flowbite-react.com)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Apollo GraphQL](https://new.apollographql.com)

## How To Use

To run this application, you'll need:
- [Git](https://git-scm.com) - To versioning and download the project

On managed by docker way:
- [Docker](https://www.docker.com) - To run this project

Without docker:
- [Npm](https://www.npmjs.com) - To manage your packages
- [Node.js](https://nodejs.org) - To run back and front
- [Mysql](https://www.mysql.com) - To save the data

### Clone this repository using this command
```bash
git clone https://github.com/alexandre1921/e-commerce
```

### Setup your env
Create an env file for backend
- enter on backend folder with
```bash
cd backend
```
- create an env file, tip you can use the .env.example
```bash
cp .env.example .env
```

### Finally, run your app with docker compose on project's root folder
```bash
docker compose --env-file=./backend-node/.env up
```

### Success 🚀. The app is running.
```bash
[+] Running 3/3
 ⠿ Container mysql-db            Recreated                                                                                                  0.1s
 ⠿ Container backend             Recreated                                                                                                  0.1s
 ⠿ Container node-front-end-web  Recreated                                                                                                  0.1s
Attaching to backend, mysql-db, node-front-end-web
mysql-db            | 2023-09-07 03:55:22+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.1.0-1.el8 started.
mysql-db            | 2023-09-07 03:55:22+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
mysql-db            | 2023-09-07 03:55:22+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.1.0-1.el8 started.
mysql-db            | '/var/lib/mysql/mysql.sock' -> '/var/run/mysqld/mysqld.sock'
mysql-db            | 2023-09-07T03:55:23.105337Z 0 [System] [MY-015015] [Server] MySQL Server - start.
mysql-db            | 2023-09-07T03:55:23.283235Z 0 [Warning] [MY-011068] [Server] The syntax '--skip-host-cache' is deprecated and will be removed in a future release. Please use SET GLOBAL host_cache_size=0 instead.
mysql-db            | 2023-09-07T03:55:23.284206Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.1.0) starting as process 1
mysql-db            | 2023-09-07T03:55:23.288759Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
mysql-db            | 2023-09-07T03:55:23.422659Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
mysql-db            | 2023-09-07T03:55:23.603294Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
mysql-db            | 2023-09-07T03:55:23.603331Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
mysql-db            | 2023-09-07T03:55:23.605466Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
mysql-db            | 2023-09-07T03:55:23.623584Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
mysql-db            | 2023-09-07T03:55:23.623640Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.1.0'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.
backend             | npm run dev
backend             | $ npm run startup && ts-node-dev --no-notify --respawn --transpile-only -r tsconfig-paths/register src/index.ts
node-front-end-web  | npm run dev
node-front-end-web  | $ vite
backend             | 
backend             | > e-commerce-backend@1.0.0 startup
backend             | > npm i && npm run db-startup
backend             | 
node-front-end-web  | 
node-front-end-web  |   VITE v4.4.9  ready in 394 ms
node-front-end-web  | 
node-front-end-web  |   ➜  Local:   http://localhost:5173/
node-front-end-web  |   ➜  Network: use --host to expose
backend             | 
backend             | up to date, audited 660 packages in 3s
backend             | 
backend             | 148 packages are looking for funding
backend             |   run `npm fund` for details
backend             | 
backend             | 1 low severity vulnerability
backend             | 
backend             | To address all issues, run:
backend             |   npm audit fix --force
backend             | 
backend             | Run `npm audit` for details.
backend             | 
backend             | > e-commerce-backend@1.0.0 db-startup
backend             | > npm run migrate && npm run generate
backend             | 
backend             | 
backend             | > e-commerce-backend@1.0.0 migrate
backend             | > npx prisma migrate dev
backend             | 
backend             | Environment variables loaded from .env
backend             | Prisma schema loaded from prisma/schema.prisma
backend             | Datasource "db": MySQL database "e-commerce-db" at "mysql-db:3306"
backend             | 
backend             | Already in sync, no schema change or pending migration was found.
backend             | 
✔ Generated Prisma Client (v5.2.0) to ./node_modules/@prisma/client in 60ms
backend             | ✔ Generated TypeGraphQL integration to ./src/generated/type-graphql in 1.06s
backend             | 
backend             | 
backend             | 
backend             | > e-commerce-backend@1.0.0 generate
backend             | > npx prisma generate
backend             | 
backend             | Environment variables loaded from .env
backend             | Prisma schema loaded from prisma/schema.prisma
backend             | 
backend             | ✔ Generated Prisma Client (v5.2.0) to ./node_modules/@prisma/client in 59ms
backend             | 
backend             | ✔ Generated TypeGraphQL integration to ./src/generated/type-graphql in 1.08s
backend             | Start using Prisma Client in Node.js (See: https://pris.ly/d/client)
backend             | ```
backend             | import { PrismaClient } from '@prisma/client'
backend             | const prisma = new PrismaClient()
backend             | ```
backend             | or start using Prisma Client at the edge (See: https://pris.ly/d/accelerate)
backend             | ```
backend             | import { PrismaClient } from '@prisma/client/edge'
backend             | const prisma = new PrismaClient()
backend             | ```
backend             | 
backend             | See other ways of importing Prisma Client: http://pris.ly/d/importing-client
backend             | 
backend             | npm notice 
backend             | npm notice New major version of npm available! 9.6.7 -> 10.0.0
backend             | npm notice Changelog: <https://github.com/npm/cli/releases/tag/v10.0.0>
backend             | npm notice Run `npm install -g npm@10.0.0` to update!
backend             | npm notice 
backend             | [INFO] 03:55:34 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 5.0.4)
backend             | 
backend             |     Server ready at: http://localhost:4000
backend             |     See sample queries: http://pris.ly/e/ts/graphql-typegraphql#using-the-graphql-api
```

### Alternativaly, you can run without docker
- [Backend with mysql config](./node-backend/README.md)
- [Front-end](./node-front-end-web/README.md)

### IMPORTANT!!!

This project was developed on the docker's images versions, in case you don't use docker to run, it may have some unnexpected behavior, to prevent this use these versions of:
- Alpine: 3.18
- Node: 18.17.1
- Mysql: 8.1.0
