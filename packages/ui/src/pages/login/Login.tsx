import React from "react";
import { Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useSelector, actions, useDispatch } from "store";
import { Redirect } from "react-router";

const useStyles = makeStyles(theme => ({
  container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px"
  },
  overlay: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  button: {
    margin: "10px 20px"
  },
  icon: {
    paddingRight: "10px"
  }
}));

const Login: React.FC = () => {
  const classes = useStyles();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  if (user.data) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <Paper className={classes.container}>
      <h1>Login</h1>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => dispatch(actions.user.login())}
      >
        <FontAwesomeIcon
          icon={faGoogle}
          className={classes.icon}
        ></FontAwesomeIcon>
        Google Sign in
      </Button>
      {user.login && user.login.status === "pending" && (
        <div className={classes.overlay}></div>
      )}
    </Paper>
  );
};

export default Login;
