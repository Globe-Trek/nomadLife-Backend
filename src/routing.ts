import { Application } from 'express';

import authRoutes from './auth/infrastracture/route';

// import packageJson from '../package.json';

const routes = (app: Application) => {
  app.use('/api/v1', authRoutes);
  app.get('/healthcheck', (_, res) => res.status(200).send('OK'));
  // app.get('/version', (_, res) => res.status(200).send(packageJson.version));
};

export default routes;
