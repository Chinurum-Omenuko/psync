import { createAuth0Client } from '@auth0/auth0-spa-js';

let client: any;

type AuthFunctions = {
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

export async function withAuth(): Promise<AuthFunctions> {
  if (!client) {
    client = await createAuth0Client({
      domain: 'dev-cz5a6lpjjvm4x85a.us.auth0.com',
      clientId: 'rSvfomSk92bPvYH1fntcNys2Q7u8nVx8',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    });
  }

  return {
    login: async () => {
      await client.loginWithRedirect();
    },
    logout: async () => {
      await client.logout({ returnTo: window.location.origin });
    },
  };
}

