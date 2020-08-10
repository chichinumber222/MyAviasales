import { getSearchIdfromAPI, getTicketsfromAPI } from '../services/ticket-service';

export const showAll = (isActive) => ({
  type: 'SHOW_ALL',
  active: isActive,
});

export const showWithout = (isActive) => ({
  type: 'SHOW_WITHOUT_TRANSFERS',
  active: isActive,
});

export const showOne = (isActive) => ({
  type: 'SHOW_WITH_ONE_TRANSFER',
  active: isActive,
});

export const showTwo = (isActive) => ({
  type: 'SHOW_WITH_TWO_TRANSFERS',
  active: isActive,
});

export const showThree = (isActive) => ({
  type: 'SHOW_WITH_THREE_TRANSFERS',
  active: isActive,
});

export const selectTab = (selected) => ({
  type: 'SELECT_TAB',
  selected,
});

const ticketsReceived = (tickets) => ({
  type: 'TICKETS_RECEIVED',
  tickets,
});

const ticketsNotReceived = () => ({
  type: 'TICKETS_NOT_RECEIVED',
});

export const asyncGetTickets = () => {
  return async function (dispatch) {
    let id = 100;
    try {
      const response = await getSearchIdfromAPI();
      const { searchId } = response;

      while(true) {
        const response2 = await getTicketsfromAPI(searchId);
        const { tickets, stop } = response2;
        const ticketsWithIds = tickets.map((ticket) => {
          const ticketWithId = {id, ...ticket};
          id += 1;
          return ticketWithId;
        })
        dispatch(ticketsReceived(ticketsWithIds));

        console.log(ticketsWithIds.length);
        if (stop) {
          console.log('Done');
          break;
        };
      }     
    } catch (error) {
      dispatch(ticketsNotReceived());
    }
  };
};

export const showMoreCards = () => ({
  type: 'SHOW_MORE_CARDS',
})