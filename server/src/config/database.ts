import mongoose from 'mongoose';
import { environment } from '.';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(environment.database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    throw error;
  }
};
