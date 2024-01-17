export class GoogleUrlGenerator {
  constructor() {
  }

  run(): string {
    const params = {
      baseUrl: "https://nomadlife.auth.us-east-1.amazoncognito.com",
      client_id: 'this.clientId',
      response_type: 'code',
      scope: 'email+openid+phone+profile',
      redirect_url: "this.redirectUri",
      identity_provider: "Google",
    };

    return `${params.baseUrl}/oauth2/authorize?client_id=${params.client_id}&response_type=${params.response_type}&scope=${params.scope}&redirect_uri=${params.redirect_url}&identity_provider=${params.identity_provider}`;
  }
}
