/* eslint-disable no-await-in-loop */
import { getSearchIdfromAPI, getTicketsfromAPI } from '../services/ticket-service';
import addIdtoObject from '../services/add-Id -to-object';
import * as types from './action-types';

export const showAll = (isActive) => ({
  type: types.SHOW_ALL,
  active: isActive,
});

export const showWithout = (isActive) => ({
  type: types.SHOW_WITHOUT_TRANSFERS,
  active: isActive,
});

export const showOne = (isActive) => ({
  type: types.SHOW_WITH_ONE_TRANSFER,
  active: isActive,
});

export const showTwo = (isActive) => ({
  type: types.SHOW_WITH_TWO_TRANSFERS,
  active: isActive,
});

export const showThree = (isActive) => ({
  type: types.SHOW_WITH_THREE_TRANSFERS,
  active: isActive,
});

export const selectTab = (selected) => ({
  type: types.SELECT_TAB,
  selected,
});

const ticketsReceived = (tickets, stop) => ({
  type: types.TICKETS_RECEIVED,
  tickets,
  stop,
});

const ticketsNotReceived = () => ({
  type: types.TICKETS_NOT_RECEIVED,
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

        // console.log(ticketsWithIds.length);
        if (stop) {
          // console.log('Done');
          break;
        }
      }
    } catch (error) {
      dispatch(ticketsNotReceived());
    }
  };
};

export const showMoreCards = () => ({
  type: types.SHOW_MORE_CARDS,
});
