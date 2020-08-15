import { combineReducers } from 'redux';
import {
  SHOW_ALL,
  SHOW_WITHOUT_TRANSFERS,
  SHOW_WITH_ONE_TRANSFER,
  SHOW_WITH_TWO_TRANSFERS,
  SHOW_WITH_THREE_TRANSFERS,
  SELECT_TAB,
  TICKETS_RECEIVED,
  TICKETS_NOT_RECEIVED,
  SHOW_MORE_CARDS,
} from './action-types';

const beginStatesOfCheckboxes = {
  all: false,
  without: true,
  one: false,
  two: false,
  three: false,
};

function checkboxes(state = beginStatesOfCheckboxes, action) {
  switch (action.type) {
    case SHOW_ALL:
      return {
        all: action.active,
        without: action.active,
        one: action.active,
        two: action.active,
        three: action.active,
      };
    case SHOW_WITHOUT_TRANSFERS:
      return state.one && state.two && state.three
        ? { ...state, all: action.active, without: action.active }
        : { ...state, without: action.active };
    case SHOW_WITH_ONE_TRANSFER:
      return state.without && state.two && state.three
        ? { ...state, all: action.active, one: action.active }
        : { ...state, one: action.active };
    case SHOW_WITH_TWO_TRANSFERS:
      return state.without && state.one && state.three
        ? { ...state, all: action.active, two: action.active }
        : { ...state, two: action.active };
    case SHOW_WITH_THREE_TRANSFERS:
      return state.without && state.one && state.two
        ? { ...state, all: action.active, three: action.active }
        : { ...state, three: action.active };
    default:
      return state;
  }
}

function tab(state = 'cheapest', action) {
  switch (action.type) {
    case SELECT_TAB:
      return action.selected;
    default:
      return state;
  }
}

function tickets(state = [], action) {
  switch (action.type) {
    case TICKETS_RECEIVED:
      return [...state, ...action.tickets];
    default:
      return state;
  }
}

function error(state = false, action) {
  switch (action.type) {
    case TICKETS_NOT_RECEIVED:
      return true;
    default:
      return state;
  }
}

function ticketsPortionsСounter(state = 1, action) {
  switch (action.type) {
    case SHOW_MORE_CARDS:
      return state + 1;
    default:
      return state;
  }
}

function successfulDownload(state = false, action) {
  switch (action.type) {
    case TICKETS_RECEIVED:
      return action.stop;
    default:
      return state;
  }
}

const reducer = combineReducers({
  checkboxes,
  tab,
  tickets,
  error,
  ticketsPortionsСounter,
  successfulDownload,
});

export default reducer;
