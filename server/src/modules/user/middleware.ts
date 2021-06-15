import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { StatusCode } from '../../config';

class UserMiddleware {
  isAuth = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (error, user) => {
      if (error) {
        return res
          .status(StatusCode.Unauthorized)
          .json({ message: 'Internal server error' });
      }

      if (!user) {
        return res
          .status(StatusCode.Unauthorized)
          .json({ message: 'Unauthorized access' });
      }

      req.currentUser = user;

      return next();
    })(req, res, next);
  };
}

const userMiddleware = new UserMiddleware();

export { userMiddleware };
