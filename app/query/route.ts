 import postgres from 'postgres';

 const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

 async function listListing() {
 	const data = await sql`
     SELECT *
     FROM listings
      JOIN seller_buyers ON listings.seller_id = seller_buyers.id;
   `;

 	return data;
 }

export async function GET() {
   try {
   	return Response.json(await listListing());
   } catch (error) {
   	return Response.json({ error }, { status: 500 });
   }
}
