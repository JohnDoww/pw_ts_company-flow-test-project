/**
 * This file defines the URLs used in the application.
 * It exports an object containing the URLs for the web application and the API.
 */

export const urls = {
  login: '/login',
  home: '/',
  clients: '/clients',
  newClient: '/clients/new',
  dashboard: '/dashboard',
  thirdParty: {
    fetchOrgData: 'https://data.brreg.no/enhetsregisteret/api/enheter',
  },
};
