import { Document } from 'mongoose';

export interface ProductModel extends Document {
  name: string;
  image: string;
  price: string;
  stripe?: {
    price: string;
    productId: string;
  };
  createdAt: string;
  updatedAt: string;
}
