import { Application } from 'express';

// import droneRoutes from '../cache/api/drones/infrastructure/route';

// import packageJson from '../package.json';

const routes = (app: Application) => {
  // app.use('/api', droneRoutes);
  app.get('/healthcheck', (_, res) => res.status(200).send('OK'));
  // app.get('/version', (_, res) => res.status(200).send(packageJson.version));
};

export default routes;
