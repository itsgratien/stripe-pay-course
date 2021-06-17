import express from 'express';
import { productController } from './controller';

const productRoute = express.Router();

productRoute.post('/', productController.createProduct);

productRoute.get('/', productController.getAllProduct);

productRoute.get('/:productId', productController.getProductDetail);

export { productRoute };
