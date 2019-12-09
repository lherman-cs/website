import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import { useAuth } from "./App.hook";

const Loading: React.FC = () => {
  return <h1>Loading...</h1>;
};

const App: React.FC = () => {
  const { initialized } = useAuth();

  if (!initialized) {
    return <Loading></Loading>;
  }

  return (
    <Router>
      <Switch>
        <Route path="/landing">
          <Landing></Landing>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/">
          <Redirect to="/landing"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
