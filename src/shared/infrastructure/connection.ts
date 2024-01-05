import mongoose from 'mongoose';

import Constants from '../domain/serverConstants';

const connectDB = () => {
  return mongoose.connect(Constants.MONGODB_URI);
};

export default connectDB;
