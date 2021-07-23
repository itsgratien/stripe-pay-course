import express from 'express';
import { userRoute } from './user';
import { productRoute } from './product';

const router = express.Router();

router.use('/user', userRoute);

router.use('/product', productRoute);

export default router;
