export const COUNTRIES_CITIES_CONFIG = {
  baseURL: 'https://api.countrystatecity.in/v1/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-CSCAPI-KEY': process.env.NEXT_PUBLIC_LOCATION_API_KEY,
  },
}
