import assert from 'assert';
import dotenv from 'dotenv';

dotenv.config();

assert(process.env.MONGODB_URI, 'MONGODB_URI configuration is required.');
assert(process.env.PORT, 'PORT configuration is required.');

const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
};

export default config;
