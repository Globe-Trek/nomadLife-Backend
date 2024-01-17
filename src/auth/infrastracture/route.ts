import { Router } from 'express';

import * as controller from './controller';

// import * as middlewares from '../../../shared/infrastructure/middlewares';

// import * as schema from './middlewares/schemas';

const router = Router();

router.post(
  'auth/google_sing_in_url',
  // middlewares.handlerValidation('googleSingInUrl', schema.googleSingInUrl),
  controller.googleSingInUrl,
);

// router.post(
//   'auth/token',
//   middlewares.handlerValidation('postLoadMedication', schema.postLoadMedication),
//   controller.postLoadMedication,
// );

export default router;
