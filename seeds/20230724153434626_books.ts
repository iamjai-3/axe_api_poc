import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('books').del();

  // Inserts seed entries
  await knex('books').insert([
    {
      name: 'Test Book',
      author: 'Test Author',
      price: 50
    }
  ]);
}
