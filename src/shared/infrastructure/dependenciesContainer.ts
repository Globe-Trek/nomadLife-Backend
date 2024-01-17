import * as awilix from "awilix";

import { GoogleUrlGenerator } from "../../auth/aplication/generateGoogleUrl";

const container = awilix.createContainer();

container.register({
  generateGoogleUrl: awilix.asClass(GoogleUrlGenerator),
});

export const generateGoogleUrl = container.resolve("generateGoogleUrl");
