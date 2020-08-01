import request from './request';

class TicketService {
  getSearchId() {
    return request(`https://front-test.beta.aviasales.ru/search`);
  }

  getTickets(searchId) {
    return request(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
  }
}

export default TicketService;
