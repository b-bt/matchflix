import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons/";
import LockIcon from "@material-ui/icons/Lock";
import { useState } from "react";
import { login } from "../../services/auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 12,
  },
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  button: {
    alignSelf: "center",
    marginTop: theme.spacing(2),
  },
}));

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory();
  const classes = useStyles();

  const [formValues, setFormValues] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setFormValues((previousValues) => {
          return { ...previousValues, email: value };
        });
        break;
      case "password":
        setFormValues((previousValues) => {
          return { ...previousValues, password: value };
        });
        break;
    }
  };

  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { email, password } = formValues;
    try {
      await login(email, password);
      history.push("/create");
    } catch (err) {
      console.log("Erro ao tentar fazer login!");
    }
  };

  return (
    <>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography className={classes.title} variant={"h3"}>
            Login
          </Typography>
        </Grid>
        <FormControl className={classes.margin}>
          <InputLabel>E-mail</InputLabel>
          <Input
            name={"email"}
            value={formValues.email}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel>Senha</InputLabel>
          <Input
            name={"password"}
            value={formValues.password}
            onChange={handleChange}
            type={"password"}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </Grid>
    </>
  );
};

export default Login;
