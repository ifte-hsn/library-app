export const oktaConfig = {
    clientId: '0oa7wlrus7UDc6ADY5d7',
    issuer: 'https://dev-91779094.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}