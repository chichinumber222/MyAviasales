const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return {
        ...state,
        checkboxes: {
          all: action.active,
          without: action.active,
          one: action.active,
          two: action.active,
          three: action.active,
        },
      };
    case 'SHOW_WITHOUT_TRANSFERS':
      return state.checkboxes.one && state.checkboxes.two && state.checkboxes.three
        ? {
            ...state,
            checkboxes: {
              ...state.checkboxes,
              all: action.active,
              without: action.active,
            },
          }
        : {
            ...state,
            checkboxes: {
              ...state.checkboxes,
              without: action.active,
            },
          };
    case 'SHOW_WITH_ONE_TRANSFER':
      return state.checkboxes.without && state.checkboxes.two && state.checkboxes.three
        ? {
            ...state,
            checkboxes: {
              ...state.checkboxes,
              all: action.active,
              one: action.active,
            },
          }
        : {
            ...state,
            checkboxes: {
              ...state.checkboxes,
              one: action.active,
            },
          };
    case 'SHOW_WITH_TWO_TRANSFERS':
      return state.checkboxes.without && state.checkboxes.one && state.checkboxes.three
        ? {
            ...state,
            checkboxes: {
              ...state.checkboxes,
              all: action.active,
              two: action.active,
            },
          }
        : {
            ...state,
            checkboxes: {
              ...state.checkboxes,
              two: action.active,
            },
          };
    case 'SHOW_WITH_THREE_TRANSFERS':
      return state.checkboxes.without && state.checkboxes.one && state.checkboxes.two
        ? {
            ...state,
            checkboxes: {
              ...state.checkboxes,
              all: action.active,
              three: action.active,
            },
          }
        : {
            ...state,
            checkboxes: {
              ...state.checkboxes,
              three: action.active,
            },
          };
    case 'SELECT_TAB':
      return { ...state, tab: action.selected };
    case 'TICKETS_RECEIVED':
      return { ...state, tickets: [...state.tickets, ...action.tickets] };
    case 'TICKETS_NOT_RECEIVED':
      return { ...state, error: true };
    default:
      return state;
  }
};

export default reducer;
