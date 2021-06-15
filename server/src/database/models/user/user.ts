import mongoose from 'mongoose';
import { UserModel } from '.';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model<UserModel>('User', UserSchema);

export default UserModel;
