import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
  },
  movie: {
    margin: "40px 0",
    overflowY: "scroll",
    height: 200,
  },
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  table: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    height: 240,
  },
  button: {
    marginBottom: "10px",
  },
}));

interface TableRowData {
  ranking: number;
  title: string;
  votes: number;
}

const Result = () => {
  const classes = useStyles();

  const createData = (ranking: number, title: string, votes: number) => {
    return { ranking, title, votes };
  };

  const [rows, setRows] = useState<TableRowData[]>([]);

  useEffect(() => {
    //fetch results to rows
  });

  return (
    <>
      <Grid container direction={"column"}>
        <Grid item>
          <Typography className={classes.title} variant={"h3"}>
            Resultado
          </Typography>
        </Grid>
        <TableContainer className={classes.table} component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left">Ranking</TableCell>
                <TableCell align="left">Título</TableCell>
                <TableCell align="right">Votos</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.ranking}>
                  <TableCell align="left" style={{ minWidth: 10 }}>
                    {row.ranking}
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: 200 }}>
                    {row.title}
                  </TableCell>
                  <TableCell align="right" style={{ minWidth: 10 }}>
                    {row.votes}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid item>
          <Button
            className={classes.button}
            variant={"contained"}
            color={"primary"}
          >
            Atualizar Resultados
          </Button>
          <Typography>1/x participantes já votaram</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Result;
