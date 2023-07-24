import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('orders', function (table) {
    table.increments();
    table.integer('book_id').unsigned().notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.integer('quantity').notNullable().defaultTo(1);
    table.timestamps();

    table
      .foreign('book_id')
      .references('books.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table
      .foreign('user_id')
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('orders');
}
