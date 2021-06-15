import bcrypt from 'bcryptjs';
import { userModel } from '../models';

export const createNewUser = async () => {
  const newUser = {
    username: 'gratien',
    password: bcrypt.hashSync('kigali@20!'),
  };

  await userModel.findOneAndUpdate(
    { username: newUser.username },
    { $set: newUser },
    { upsert: true, new: true }
  );
};

createNewUser();
