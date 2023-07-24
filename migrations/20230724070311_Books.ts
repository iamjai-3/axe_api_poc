import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('books', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('author').notNullable();
    table.double('price').notNullable();
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('books');
}
