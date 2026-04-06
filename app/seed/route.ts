import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { ProductListings, SellerBuyers, revenue, users } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedListings() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS listings (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      seller_id UUID NOT NULL,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price INT NOT NULL,
      condition VARCHAR(255) NOT NULL,
      image_url VARCHAR(255),
      location VARCHAR(255) NOT NULL,
      distance NUMERIC(10, 2) NOT NULL,
      university VARCHAR(255) NOT NULL,
      verified BOOLEAN NOT NULL
    );
  `;

  const insertedListings = await Promise.all(
    ProductListings.map(
      (listing) => sql`
        INSERT INTO listings (seller_id, name, description, price, condition, image_url, location, distance, university, verified)
        VALUES (${listing.seller_id}, ${listing.name}, ${listing.description}, ${listing.price}, ${listing.condition}, ${listing.image_url}, ${listing.location}, ${listing.distance}, ${listing.university}, ${listing.verified})
        ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );
  return insertedListings;
  }  

async function seedSellerBuyers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS seller_buyers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
      university VARCHAR(255) NOT NULL,
      verified BOOLEAN NOT NULL,
      rating NUMERIC(2, 1) NOT NULL
    );
  `;

  const insertedSellerBuyers = await Promise.all(
    SellerBuyers.map(
      (sellerBuyer) => sql`
        INSERT INTO seller_buyers (id, name, email, image_url, university, verified, rating)
        VALUES (${sellerBuyer.id}, ${sellerBuyer.name}, ${sellerBuyer.email}, ${sellerBuyer.image_url}, ${sellerBuyer.university}, ${sellerBuyer.verified}, ${sellerBuyer.rating})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedSellerBuyers;
}

/* async function seedRevenue() {
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
} */

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedUsers(),
      seedListings(),
      seedSellerBuyers(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
