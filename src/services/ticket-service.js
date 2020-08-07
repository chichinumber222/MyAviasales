import request from './request';

export function getSearchIdfromAPI() {
  return request(`https://front-test.beta.aviasales.ru/search`);
}

export function getTicketsfromAPI(searchId) {
  return request(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
}
