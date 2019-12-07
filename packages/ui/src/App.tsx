import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from "./pages/landing";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/landing">
          <Landing></Landing>
        </Route>
        <Route path="/">
          <Redirect to="/landing"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
