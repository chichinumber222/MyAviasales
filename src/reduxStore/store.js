import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const initialState = {
  checkboxes: {
    all: false,
    without: true,
    one: false,
    two: false,
    three: false,
  },
  tab: 'cheapest',
  tickets: [],
  successfulDownload: false,
  error: false,
  ticketsPortionsСounter: 1,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
