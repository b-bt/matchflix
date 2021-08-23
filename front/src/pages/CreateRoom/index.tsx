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
import GroupIcon from "@material-ui/icons/Group";
import React, { useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import api from "../../services/api";

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

const CreateRoom = () => {
  const history = useHistory();
  const classes = useStyles();

  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    console.log(event);
    console.log(value);
    setNumberOfPlayers(parseInt(value));
  };

  const handleCreateRoom = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      event.preventDefault();
      const res = await api.post("/salas", {
        "qtdParticipantes": numberOfPlayers
      });
      history.push({pathname:generatePath("/room/:roomId", {roomId: res.data.id})});
    } catch {
      console.log("Erro ao tentar criar a sala!");
    }
  };

  return (
    <>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography className={classes.title} variant={"h3"}>
            Criar Sala
          </Typography>
        </Grid>
        <FormControl className={classes.margin}>
          <InputLabel>Quantidade de Pessoas</InputLabel>
          <Input
            name={"players-count"}
            value={numberOfPlayers}
            onChange={handleChange}
            type={"number"}
            startAdornment={
              <InputAdornment position="start">
                <GroupIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={handleCreateRoom}
        >
          Criar Sala
        </Button>
      </Grid>
    </>
  );
};

export default CreateRoom;
