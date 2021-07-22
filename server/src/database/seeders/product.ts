import { productModel } from '../models';

const productItems = [
  {
    name: `Javascript for beginner's`,
    price: '150',
    image: 'https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg',
  },

  {
    name: `Learn python`,
    price: '120',
    image:
      'https://ictslab.com/wp-content/uploads/2019/03/d1326ca6cca8038cd115a061b4e2b3bc-840x430.png',
  },
];

export const createProduct = async () => {
  try {
    await productModel.deleteMany();
    await productModel.create(productItems);
  } catch (error) {
    throw error;
  }
};
