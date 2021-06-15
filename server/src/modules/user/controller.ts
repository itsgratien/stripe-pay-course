import { Request, Response } from 'express';
import { StatusCode } from '../../config';

class UserController {
  login = async (req: Request, res: Response) => {
    try {
      return res.json({ data: 'ok' });
    } catch (error) {
      return res
        .status(StatusCode.ServerError)
        .json({ message: 'Unable to login due to internal server error' });
    }
  };
}

const userController = new UserController();

export { userController };
