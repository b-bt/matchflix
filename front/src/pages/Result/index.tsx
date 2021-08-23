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

const Result = ({ match }: MatchProps) => {
  const classes = useStyles();

  const [rows, setRows] = useState<TableRowData[]>([]);

  const didClickReload = async () => {
    const roomId = match.params.roomId;
    const res = await api.get(`/resultados/${roomId}`);
    var resultData = res.data as [{votos: number, filme: Record<string, any>}];
    resultData.sort((rhs, lhs) => (rhs.votos > lhs.votos) ? 1 : -1 );
    const tableRows = resultData.map((result, index) => ({ranking: index, title: result.filme.titulo, votes: result.votos}));
    setRows(tableRows);
  };

  useEffect(() => {
    const fetchResults = async () => {
      const roomId = match.params.roomId;
      const res = await api.get(`/resultados/${roomId}`);
      var resultData = res.data as [{votos: number, filme: Record<string, any>}];
      resultData.sort((rhs, lhs) => (rhs.votos > lhs.votos) ? 1 : -1 );
      const tableRows = resultData.map((result, index) => ({ranking: index, title: result.filme.titulo, votes: result.votos}));
      setRows(tableRows);
    };
    fetchResults();
  },[match.params.roomId]);

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
            onClick={didClickReload}
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
