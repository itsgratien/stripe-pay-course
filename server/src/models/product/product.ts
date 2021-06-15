import mongoose from 'mongoose';
import { ProductModel } from '.';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const productModel = mongoose.model<ProductModel>(
  'Product',
  productSchema
);

export default productModel;
