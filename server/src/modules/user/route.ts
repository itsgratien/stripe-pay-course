import express from 'express';
import { userController } from './controller';
import { userMiddleware } from './middleware';

const userRoute = express.Router();

userRoute.post('/login', userController.login);

userRoute.get('/me', userMiddleware.isAuth, userController.getProfile);

export { userRoute };
