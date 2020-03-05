import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, AddFlightPage } from "./containers/index";

export default ({ childProps }) => (
  <Switch>
    <Route path={"/"} exact component={HomePage} props={childProps} />
    <Route path={"/welcome"} exact component={HomePage} props={childProps} />
    <Route
      path="/add-flight"
      exact
      component={AddFlightPage}
      props={childProps}
    />
    } />
  </Switch>
);
