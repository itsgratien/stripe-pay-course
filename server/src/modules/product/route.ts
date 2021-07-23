import express from 'express';
import { productController } from './controller';
import { userMiddleware } from '../user';

const productRoute = express.Router();

productRoute.post('/', userMiddleware.isAuth, productController.createProduct);

productRoute.get('/', productController.getAllProduct);

productRoute.get('/:productId', productController.getProductDetail);

productRoute.post('/pay/:productId', productController.payProduct);

export { productRoute };
