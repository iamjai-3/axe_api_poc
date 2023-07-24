import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('orders').del();

  // Inserts seed entries
  await knex('orders').insert([
    {
      user_id: 1,
      book_id: 1,
      quantity: 1
    }
  ]);
}
