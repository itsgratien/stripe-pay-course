import dotenv from 'dotenv';

dotenv.config();

export const environment = {
  database: process.env.DATABASE || '',

  stripeApiKey: process.env.STRIPE_API_KEY || '',

  stripePublicKey: process.env.STRIPE_PUBLIC_KEY || '',

  appSecretKey: process.env.APP_SECRET_KEY || '',
};
