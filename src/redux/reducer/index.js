import { combineReducers } from "redux";

import * as flightReducer from "./flight";

const appReducer = combineReducers({
  flight: flightReducer.flight
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
