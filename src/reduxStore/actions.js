/* eslint-disable no-await-in-loop */
import { getSearchIdfromAPI, getTicketsfromAPI } from '../services/ticket-service';
import addIdtoObject from '../services/add-Id -to-object';

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

const ticketsReceived = (tickets, stop) => ({
  type: 'TICKETS_RECEIVED',
  tickets,
  stop,
});

const ticketsNotReceived = () => ({
  type: 'TICKETS_NOT_RECEIVED',
});

export const asyncGetTickets = () => {
  return async function run(dispatch) {
    try {
      const response = await getSearchIdfromAPI();
      const { searchId } = response;
      const addId = addIdtoObject();

      while (true) {
        const response2 = await getTicketsfromAPI(searchId);
        const { tickets, stop } = response2;
        const ticketsWithIds = tickets.map(addId);
        dispatch(ticketsReceived(ticketsWithIds, stop));

        console.log(ticketsWithIds.length);
        if (stop) {
          console.log('Done');
          break;
        }
      }
    } catch (error) {
      dispatch(ticketsNotReceived());
    }
  };
};

export const showMoreCards = () => ({
  type: 'SHOW_MORE_CARDS',
});
