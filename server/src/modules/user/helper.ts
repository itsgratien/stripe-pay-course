import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { environment } from '../../config';

class UserHelper {
  comparePassword = (value: { password: string; hash: string }) => {
    const check = bcrypt.compareSync(value.password, value.hash);

    return check;
  };

  generateAuthToken = (payload: { _id: string }) => {
    const token = jwt.sign(payload, environment.appSecretKey, {
      expiresIn: '2 days',
    });

    return token;
  };
}

const userHelper = new UserHelper();

export { userHelper };
