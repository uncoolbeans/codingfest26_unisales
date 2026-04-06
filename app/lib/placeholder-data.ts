// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [ //USED FOR LOGIN FUNCTIONALITY ONLY, NOT FOR DASHBOARD
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: '7a8b1f0c-4b76-4b7d-9c42-7d5d8a3a17f1',
    name: 'Seller Demo',
    email: 'seller@nextmail.com',
    password: '123456',
  },
  {
    id: '1b3d7d8a-6b0f-4df5-bc0a-8c9b2d3a4e5f',
    name: 'Buyer Demo',
    email: 'buyer@nextmail.com',
    password: '123456',
  },
];

// THE BELOW NEEDS TO BE REPLACED WITH 1. PRODUCTLISTING AND 2. SELLERBUYER DATA
// THEN UPDATE THHE SEED FILE

// NOTE: `customers` is kept for compatibility with the rest of the app,
// but each object now matches the `SellerBuyer` type in `app/lib/definitions.ts`.
const SellerBuyers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
    university: 'University of Nowhere',
    verified: false,
    rating: 2.4,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
    university: 'University of Lisbon',
    verified: true,
    rating: 4.8,
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
    university: 'University of Texas',
    verified: true,
    rating: 4.6,
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
    university: 'University of Vienna',
    verified: false,
    rating: 4.1,
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
    university: 'University of Toronto',
    verified: true,
    rating: 4.9,
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
    university: 'Budapest University of Technology',
    verified: true,
    rating: 4.7,
  },
];

// NOTE: `invoices` is kept for compatibility with the rest of the app,
// but each object now matches the `ProductListing` type in `app/lib/definitions.ts`.
const ProductListings = [
  {
    name: 'Calculus I Textbook (Hardcover)',
    description:
      'Gently used. Some highlighting on chapters 1–3. Includes access code (unused).',
    price: 3500,
    condition: 'used',
    image_url: '/products/calculus-textbook.jpg',
    seller_id: SellerBuyers[2].id,
    location: 'Campus Library Entrance',
    distance: 1.2,
    university: SellerBuyers[2].university,
    verified: SellerBuyers[2].verified,
  },
  {
    name: 'Noise-Cancelling Headphones',
    description:
      'Like new. Used twice for a flight. Comes with case + charging cable.',
    price: 12999,
    condition: 'open-box',
    image_url: '/products/headphones.jpg',
    seller_id: SellerBuyers[4].id,
    location: 'Engineering Building Lobby',
    distance: 0.8,
    university: SellerBuyers[4].university,
    verified: SellerBuyers[4].verified,
  },
  {
    name: 'Dorm Mini Fridge (3.2 cu ft)',
    description:
      'Works great, clean inside. Pickup only. Perfect for dorm rooms.',
    price: 7000,
    condition: 'used',
    image_url: '/products/mini-fridge.jpg',
    seller_id: SellerBuyers[5].id,
    location: 'North Residence Hall - Front Desk',
    distance: 2.3,
    university: SellerBuyers[5].university,
    verified: SellerBuyers[5].verified,
  },
  {
    name: 'Mechanical Keyboard (Hot-swappable)',
    description:
      'Refurbished by me: cleaned + new stabilizers. Includes extra keycaps.',
    price: 8500,
    condition: 'refurbished',
    image_url: '/products/keyboard.jpg',
    seller_id: SellerBuyers[3].id,
    location: 'Student Center - Coffee Shop',
    distance: 3.6,
    university: SellerBuyers[3].university,
    verified: SellerBuyers[3].verified,
  },
  {
    name: 'Lab Coat (Size M)',
    description: 'Brand new, never worn. Bought the wrong size.',
    price: 1800,
    condition: 'new',
    image_url: '/products/lab-coat.jpg',
    seller_id: SellerBuyers[1].id,
    location: 'Chemistry Building - Main Entrance',
    distance: 0.5,
    university: SellerBuyers[1].university,
    verified: SellerBuyers[1].verified,
  },
  {
    name: 'External SSD 1TB (USB-C)',
    description:
      'Fast and reliable. Used for one semester. No issues, formatted.',
    price: 7999,
    condition: 'used',
    image_url: '/products/ssd.jpg',
    seller_id: SellerBuyers[4].id,
    location: 'Business School - Atrium',
    distance: 1.9,
    university: SellerBuyers[4].university,
    verified: SellerBuyers[4].verified,
  },
  {
    name: 'Desk Lamp (Adjustable)',
    description: 'Basic lamp for studying. Minor scuffs, works perfectly.',
    price: 1200,
    condition: 'used',
    image_url: '/products/desk-lamp.jpg',
    seller_id: SellerBuyers[0].id,
    location: 'West Parking Lot Entrance',
    distance: 4.7,
    university: SellerBuyers[0].university,
    verified: SellerBuyers[0].verified,
  },
  {
    name: 'Graphing Calculator',
    description:
      'Used for exams. Factory reset. Includes protective cover.',
    price: 4500,
    condition: 'used',
    image_url: '/products/calculator.jpg',
    seller_id: SellerBuyers[2].id,
    location: 'Math Building - Room 101',
    distance: 2.0,
    university: SellerBuyers[2].university,
    verified: SellerBuyers[2].verified,
  },
  {
    name: 'Office Chair',
    description:
      'Comfortable chair, height adjustable. One wheel slightly squeaky.',
    price: 2500,
    condition: 'used',
    image_url: '/products/chair.jpg',
    seller_id: SellerBuyers[5].id,
    location: 'Main Quad Fountain',
    distance: 1.1,
    university: SellerBuyers[5].university,
    verified: SellerBuyers[5].verified,
  },
  {
    name: 'Intro to Economics Notes (Printed)',
    description:
      'Full semester notes + practice problems. Printed and bound.',
    price: 900,
    condition: 'other',
    image_url: '/products/notes.jpg',
    seller_id: SellerBuyers[1].id,
    location: 'Humanities Building - Front Steps',
    distance: 0.9,
    university: SellerBuyers[1].university,
    verified: SellerBuyers[1].verified,
  },
  {
    name: 'Water Bottle (Insulated)',
    description: 'Good condition. Keeps drinks cold all day.',
    price: 800,
    condition: 'used',
    image_url: '/products/water-bottle.jpg',
    seller_id: SellerBuyers[3].id,
    location: 'Gym Reception',
    distance: 2.8,
    university: SellerBuyers[3].university,
    verified: SellerBuyers[3].verified,
  },
  {
    name: 'Monitor 24" (1080p)',
    description: 'Solid screen for studying/coding. No dead pixels.',
    price: 6000,
    condition: 'used',
    image_url: '/products/monitor.jpg',
    seller_id: SellerBuyers[4].id,
    location: 'Computer Science Building - Lab Entrance',
    distance: 1.4,
    university: SellerBuyers[4].university,
    verified: SellerBuyers[4].verified,
  },
  {
    name: 'Backpack (Laptop Sleeve)',
    description:
      'Fits a 15" laptop. Used for one year, zippers perfect.',
    price: 3000,
    condition: 'used',
    image_url: '/products/backpack.jpg',
    seller_id: SellerBuyers[5].id,
    location: 'Transit Stop - Main Gate',
    distance: 5.2,
    university: SellerBuyers[5].university,
    verified: SellerBuyers[5].verified,
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, SellerBuyers, ProductListings, revenue };


//localhost:3000/seed -> seeds the database with the above data, then redirects to the homepage. You can modify this data as you see fit, but make sure to keep the same structure so that it works with the rest of the app.