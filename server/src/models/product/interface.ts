import { Document } from 'mongoose';

export interface ProductModel extends Document {
  name: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}
