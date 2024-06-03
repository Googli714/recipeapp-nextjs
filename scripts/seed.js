const { db } = require('@vercel/postgres');
const { recipes } = require('./seedData.ts')

async function seedRecipes(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "recipes" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS recipes (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      stepsCount INT NOT NULL,
      steps TEXT NOT NULL,
      timeNeededInMinutes INT NOT NULL,
      ingrediants TEXT NOT NULL,
      imageURL VARCHAR(1024) NOT NULL
    );
  `;

    console.log(`Created "recipes" table`);

    const insertedRecipes = await Promise.all(
      recipes.map(
        (recipes) => client.sql`
          INSERT INTO recipes (id, name, stepsCount, steps, timeNeededInMinutes, ingrediants, imageURL)
          VALUES (${recipes.id}, ${recipes.name}, ${recipes.stepscount}, ${recipes.steps}, ${recipes.timeneededinminutes}, ${recipes.ingrediants}, ${recipes.imageurl})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedRecipes.length} recipes`);

    return {
      createTable,
      invoices: insertedRecipes,
    };
  } catch (error) {
    console.error('Error seeding recipes:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedRecipes(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});