import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Slide } from "@material-ui/core";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Loading from "./pages/loading";
import { useAuth } from "./App.hook";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    height: "100%",
    width: "100%",
    overflow: "hidden"
  }
}));

const App: React.FC = () => {
  const { initialized } = useAuth();
  const classes = useStyles();

  return (
    <Fragment>
      <Loading></Loading>
      <div className={classes.container}>
        <Slide
          direction="up"
          in={initialized}
          timeout={{ enter: 1000 }}
          mountOnEnter
          unmountOnExit
        >
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
        </Slide>
      </div>
    </Fragment>
  );
};

export default App;
