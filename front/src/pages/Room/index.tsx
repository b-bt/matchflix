import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { generatePath, useHistory, useParams } from "react-router-dom";
import api from "../../services/api";
import { MatchProps } from "../../types";


const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
  },
  movie: {
    margin: "40px 0",
    overflowY: "auto",
    height: 200,
  },
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button: {
    alignSelf: "center",
    marginTop: theme.spacing(2),
    margin: "0 10px",
  },
}));

interface Vote {
  filmeId: string;
  querAssistir: boolean;
}

interface Movie {
  id: string;
  titulo: string;
  descricao: string;
}

interface Sala {
  qtdParticipantes: number;
  filmes: Movie[];
}

const Room = ({ match }: MatchProps) => {
  const history = useHistory();
  const classes = useStyles();

  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
  const [votes, setVotes] = useState<Vote[]>([]);
  const [sala, setSala] = useState<Sala>({qtdParticipantes: 0, filmes: []} as Sala);
  const salaId = useParams()

  const handleVote = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentVote = (event.target as any).name === "yes-btn";
    const movieId = getCurrentMovie().id;

    const isLastVote = votes.length >= sala.filmes.length-1;
    if (votes.length > 0 && isLastVote) {
      const allVotes = [
        ...votes,
        { filmeId: movieId, querAssistir: currentVote } 
      ];
      const postVotes = async () => {
        const roomId = match.params.roomId;
        await api.post(`/salas/${roomId}`, allVotes);
        history.push({pathname: generatePath("/result/:roomId", {roomId: roomId})});
      }
      postVotes()
    } else {
      setVotes((votes) => [
        ...votes,
        { filmeId: movieId, querAssistir: currentVote } as Vote,
      ]);
      setCurrentMovieIndex((index) => index + 1);
    }
  };

  const getCurrentMovie = (): Movie => {
    if (!sala) {
      // throw new Error("sala não")
      return { titulo: "", descricao: "" } as Movie;
    }
    return sala.filmes[currentMovieIndex];
  };

  // useEffect(() => {
    // const hasFinishedVoting = votes.length === sala.filmes.length;
    // if (votes.length > 0 && hasFinishedVoting) {
    //   const postVotes = async () => {
    //     const roomId = match.params.roomId;
    //     await api.post(`/salas/${roomId}`);
    //     history.push("/result");
    //   }
    //   postVotes()
    // }
  // }, [history, sala, votes, match.params.roomId]);

  useEffect(() => {
    const fetchRoom = async () => {
      const roomId = 2;
      const res = await api.get(`/salas/${roomId}`);
      console.log(res);
      const resultData = res.data as Sala
      console.log(resultData);
      setSala(resultData);
    };
    fetchRoom()
  }, [salaId]);


  return (
    <>
      <Grid container direction={"column"}>
        <Grid container direction={"row"} justifyContent={"space-between"}>
          <Typography className={classes.title} variant={"h3"}>
            Votação
          </Typography>
          <Typography variant={"h5"}>
            {`${currentMovieIndex.toString()}/${sala.filmes.length.toString()}`}
          </Typography>
        </Grid>
        <Grid container direction={"column"} className={classes.movie}>
          <Typography className={classes.margin} variant={"h5"}>
            {getCurrentMovie() ? getCurrentMovie().titulo : ""}
          </Typography>
          <Typography className={classes.margin}>{getCurrentMovie() ? getCurrentMovie().descricao : ""}</Typography>
        </Grid>
        <Grid item>
          <Typography>Você quer assistir esse filme?</Typography>
        </Grid>
        <Grid container direction={"row"} justifyContent={"center"}>
          <Button
            name={"no-btn"}
            className={classes.button}
            variant={"contained"}
            color={"primary"}
            onClick={handleVote}
          >
            Não
          </Button>
          <Button
            name={"yes-btn"}
            className={classes.button}
            variant={"contained"}
            color={"primary"}
            onClick={handleVote}
          >
            Sim
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Room;
