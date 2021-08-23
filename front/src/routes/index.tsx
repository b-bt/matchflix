import { Grid, makeStyles, Paper } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import CreateRoom from "../pages/CreateRoom";
import Room from "../pages/Room";
import Result from "../pages/Result";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "100vw",
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(6),
    minWidth: 300,
    textAlign: "center",
  },
}));

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  return isAuthenticated() ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};

const Routes = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.layout}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper className={classes.paper} elevation={4}>
        <Switch>
          <Route path="/login" component={Login} exact />
          <PrivateRoute path="/create" component={CreateRoom} exact />
          <PrivateRoute path="/room" component={Room} exact />
          <PrivateRoute path="/result" component={Result} exact />
          <PrivateRoute path="/" component={CreateRoom} exact />
        </Switch>
      </Paper>
    </Grid>
  );
};

export default Routes;
