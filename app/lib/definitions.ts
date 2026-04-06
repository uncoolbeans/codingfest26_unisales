// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

//export type Customer = {
//  id: string;
//  name: string;
//  email: string;
//  image_url: string;
//};

export type SellerBuyer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  university: string;
  verified: boolean; // whether the seller's university affiliation has been verified
  rating: number; // average rating from buyers (1-5)
};

// custom-defined type for the product listing form
export type ProductListing = {
  name: string; // product name
  description: string; // product description
  price: number; // product price in cents (e.g., $10.00 would be 1000)
  condition: 'new' | 'used' | 'refurbished' | 'open-box' | 'other';
  image_url: string;
  seller_id: string;
  location: string; // location of the seller (or designated pickup location)
  distance: number; // distance in km from seller to buyer (calculated based on location)
  university: string; // university the seller is affiliated with
  verified: boolean; // whether the seller's university affiliation has been verified

}


// IGNORE BELOW
export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
