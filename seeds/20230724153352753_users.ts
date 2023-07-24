import bcrypt from 'bcrypt';
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      email: 'test-user@axe-api.com',
      first_name: 'Test',
      last_name: 'User',
      password: bcrypt.hashSync('test-password', 10)
    }
  ]);
}
