import express from 'express';
import { userRoute, userMiddleware } from './user';
import { productRoute } from './product';

const router = express.Router();

router.use('/user', userRoute);

router.use('/product', userMiddleware.isAuth, productRoute);

export default router;
