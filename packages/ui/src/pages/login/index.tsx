import React from "react";
import Login from "./Login";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Router: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/`}>
        <Login></Login>
      </Route>
    </Switch>
  );
};

export default Router;
