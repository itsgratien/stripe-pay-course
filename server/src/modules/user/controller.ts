import { Request, Response } from 'express';
import { StatusCode } from '../../config';
import { userModel } from '../../database';
import { userHelper } from './helper';

class UserController {
  login = async (req: Request, res: Response) => {
    try {
      const find = await userModel.findOne({ username: req.body.username });

      if (!find) {
        return res.status(StatusCode.Unauthorized).json({
          message: `account associated with ${req.body.username} could not be found`,
        });
      }
      const comparePassword = userHelper.comparePassword({
        password: req.body.password,
        hash: find.password,
      });

      if (!comparePassword) {
        return res
          .status(StatusCode.Unauthorized)
          .json({ message: 'password does not match' });
      }

      const token = userHelper.generateAuthToken({ _id: find._id });

      return res.json({
        data: {
          token,
          message: `Welcome back ${find.username}`,
        },
      });
    } catch (error) {
      return res
        .status(StatusCode.ServerError)
        .json({ message: 'Unable to login due to internal server error' });
    }
  };
}

const userController = new UserController();

export { userController };
