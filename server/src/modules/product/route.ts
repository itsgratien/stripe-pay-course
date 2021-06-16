import express from 'express';
import { productController } from './controller';

const productRoute = express.Router();

productRoute.post('/', productController.createProduct);

export { productRoute };
