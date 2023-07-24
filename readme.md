# Usage

```
$ npm install
$ npm run start:dev
```

## Migrations

Generate migrations:

```
npm install -g knex
knex migrate:make {{migration_name}}
```

To execute this migration file, you should execute the following command:

```
knex migrate:latest
```

Generate and Seeds:

```
npm run generate:seeder {{seed_name}}
```

To run seed files, execute:

```
npm run seed
```

## Auto-created API docs

Since Axe API already analyzes all of your models, routes, validations, etc, it is able to create your API documentation automatically in a common format. We call it auto-create documentation.

You can see the following link a full-working example of the documentation that has been created by Axe API automatically.

```
http://localhost:3000/docs
```

## Documentation

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_You can find documentation on this website : [Documentation](https://axe-api.com/)_
