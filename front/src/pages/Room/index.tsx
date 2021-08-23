import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
  movieId: string;
  vote: boolean;
}

const Room = () => {
  const history = useHistory();
  const classes = useStyles();

  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
  const [movies, setMovies] = useState<Object[]>([]);
  const [votes, setVotes] = useState<Vote[]>([]);

  const handleVote = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentVote = (event.target as any).name === "yes-btn";
    // setVotes((votes) => [
    //   ...votes,
    //   { movieId: movies[currentMovieIndex].id, vote: currentVote } as Vote,
    // ]);
    setCurrentMovieIndex((index) => index + 1);
  };

  useEffect(() => {
    if (votes.length === movies.length) {
      // post votes
      history.push("/result");
    }
  }, [history, movies, votes]);

  useEffect(() => {
    //fetch movies
  }, []);

  return (
    <>
      <Grid container direction={"column"}>
        <Grid container direction={"row"} justifyContent={"space-between"}>
          <Typography className={classes.title} variant={"h3"}>
            Votação
          </Typography>
          <Typography variant={"h5"}>
            {currentMovieIndex.toString + "/" + movies.length.toString}
          </Typography>
        </Grid>
        <Grid container direction={"column"} className={classes.movie}>
          <Typography className={classes.margin} variant={"h5"}>
            Título do Filme
          </Typography>
          <Typography className={classes.margin}>Descrição do Filme</Typography>
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
