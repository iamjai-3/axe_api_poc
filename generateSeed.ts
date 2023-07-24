// import * as fs from 'fs';
// import * as path from 'path';

// function generateSeedName(inputName: string) {
//   const now = new Date();
//   const timestamp = now.getTime();
//   return `${timestamp}_${inputName}.ts`;
// }

// async function generateSeedFile(inputName: string) {
//   const seedName = generateSeedName(inputName);
//   const seedFilePath = path.join(__dirname, 'seeds', seedName);

//   const seedTemplate = `
//   import * as Knex from 'knex';
//   export async function seed(knex: Knex): Promise<void> {
//     // Seed logic goes here
//   }
// `;

//   await fs.promises.writeFile(seedFilePath, seedTemplate);

//   console.log(`Seed file "${seedName}" created successfully.`);
// }

// const inputName = process.argv[2];
// if (!inputName) {
//   console.error('Please provide a name for the seed.');
// } else {
//   generateSeedFile(inputName).catch((err) => {
//     console.error('Error generating seed:', err);
//   });
// }

// createSeed.ts
import { execSync } from 'child_process';

const generateSeed = (name: string) => {
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
  const seedName = `${timestamp}_${name}`;
  const command = `npx knex seed:make ${seedName}`;

  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error: any) {
    console.error('Error generating seed:', error.message);
  }
};

// Get the seed name from the command line arguments
const nameFromArgs = process.argv[2];

// If no name is provided, display an error message
if (!nameFromArgs) {
  console.error('Please provide a name for the seed.');
  process.exit(1);
}

// Generate the seed with a timestamp and the provided name
generateSeed(nameFromArgs);
