import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
  checkboxes: {
    all: false,
    without: false,
    one: false,
    two: false,
    three: false,
  },
  tab: 'cheapest',
};

const store = createStore(reducer, initialState);

export default store;
