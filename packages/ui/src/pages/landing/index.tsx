import React from "react";
import Default from "./Default";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const App: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/`}>
        <Default></Default>
      </Route>
    </Switch>
  );
};

export default App;
