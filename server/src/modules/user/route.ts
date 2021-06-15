import express from 'express';
import { userController } from './controller';

const userRoute = express.Router();

userRoute.post('/login', userController.login);

export { userRoute };
