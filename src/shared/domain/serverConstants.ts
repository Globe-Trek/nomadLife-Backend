import assert from 'assert';
import dotenv from 'dotenv';

dotenv.config();

assert(process.env.MONGODB_URI, 'MONGODB_URI configuration is required.');
assert(process.env.PORT, 'PORT configuration is required.');
assert(process.env.AWS_COGNITO_CLIENT_ID, 'AWS_COGNITO_CLIENT_ID configuration is required.');
// assert(process.env.COGNITO_URL, 'PORT configuration is required.');
// assert(process.env.PORT, 'PORT configuration is required.');

const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
};

export default config;
