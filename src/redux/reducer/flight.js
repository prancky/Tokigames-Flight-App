import { ACTIONS, FLIGHTS } from '../types/index';

export const initialState = {
  business: [],
  cheap: [],
  action: null,
  error: null,
  fetching: false
};

export const flight = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS.BUSINESS + ACTIONS.FETCHING:
      return {
        ...state,
        action: action.type,
        fetching: true
      };
    case FLIGHTS.BUSINESS + ACTIONS.SUCCESS:
      return {
        ...state,
        action: action.type,
        business: action.data,
        fetching: false
      };
    case FLIGHTS.BUSINESS + ACTIONS.FAILURE:
      return {
        ...state,
        action: action.type,
        error: action.error,
        fetching: false
      };
    case FLIGHTS.CHEAP + ACTIONS.FETCHING:
      return {
        ...state,
        action: action.type,
        fetching: true
      };
    case FLIGHTS.CHEAP + ACTIONS.SUCCESS:
      return {
        ...state,
        action: action.type,
        cheap: action.data,
        fetching: false
      };
    case FLIGHTS.CHEAP + ACTIONS.FAILURE:
      return {
        ...state,
        action: action.type,
        error: action.error,
        fetching: false
      };
    case FLIGHTS.BUSINESS + ACTIONS.INSERT + ACTIONS.SUCCESS:
      return {
        ...state,
        action: action.type,
        business: [...state.business, action.data.data],
        fetching: false
      };
    case FLIGHTS.CHEAP + ACTIONS.INSERT + ACTIONS.SUCCESS:
      return {
        ...state,
        action: action.type,
        cheap: [...state.cheap, action.data.data],
        fetching: false
      };
    default:
      return state;
  }
};
