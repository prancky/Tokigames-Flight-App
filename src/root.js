import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/store/store.js";
const store = configureStore();

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
