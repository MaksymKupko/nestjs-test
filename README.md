## Description

Code and Cakes [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

- [TS Reset](https://www.totaltypescript.com/ts-reset)
- Starter TypeORM entity `src/shared/starter.entity.ts`
- Conventional commits with Husky hooks (links below)
- Prettier
- ESLint
- Swagger support (TBD)
- Basic Auth flow (TBD)
- JWT logic (TBD)
- Google auth (TDB)
- TypeORM
- Migrations scripts configured (description below)
- Postgres predefined connection options

## Installation

Installs all packages and activates husky hooks

```bash
$ npm install
```

## Running the app

```bash
# start development in watch mode
$ npm run start:dev

# development
$ npm run start

# production mode
$ npm run start:prod
```

## Conventinal commits

Every commit is validated before applying

- Cheetsheat can be found [here](https://cheatography.com/albelop/cheat-sheets/conventional-commits)
- Specification can be found [here](https://www.conventionalcommits.org/en/v1.0.0/#specification)

## Migrations

All migrations are stored in `src/db/migrations`

```bash
# generate
$ npm run migrations:generate --name={MIGRATION_NAME}

# run
$ npm run migrations:run

# revert
$ npm run migrations:revert
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
