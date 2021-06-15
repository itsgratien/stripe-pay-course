import { UserModel } from '../../database';

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserModel;
    }
  }
}
