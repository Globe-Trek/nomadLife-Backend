// import { IReq, IRes } from '../../../shared/domain/global';
import { generateGoogleUrl } from "../../shared/infrastructure/dependenciesContainer";

export const googleSingInUrl = async (_: any, res: any) => {
  const googleUrl = generateGoogleUrl.run();
  res.json({ googleUrl });
};

// https://nomadlife.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=629gie261clro7qaekc3tb4n0&response_type=code&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F
// http://localhost:3000/?code=d5c9f4a0-30a4-40f1-9aeb-ee962f168b65