import express from "express";
import path from "path";
import TelaResultadoVotacaoControle from "./controles/telaResultadoVotacaoControle";
import TelaSalaControle from "./controles/telaSalaControle";
import FabricaRepositorioSQLite from "./fabricas/fabricaRepositorioSqlite";
import Fachada from "./fachada/fachada";
import Gerenciador from "./manager/gerenciador";
import IntencaoVoto from "./mensagens/intencaoVoto";

const app = express();
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "app/telas"));

app.use(express.static(path.join(__dirname, "app/static")));

const PORT = 8100;
const fabricaRepositorio = new FabricaRepositorioSQLite();
const gerenciador = new Gerenciador(fabricaRepositorio);
const fachada = new Fachada(gerenciador);

const telaSalaControle = new TelaSalaControle(fachada);
const telaResultadoVotacaoControle = new TelaResultadoVotacaoControle(fachada);

app.get("/", (req, res) => res.send("Seja bem-vindo ao MatchFlix"));

app.get("/salas/:idSala", telaSalaControle.getSala);
app.post("/salas/:idSala", telaSalaControle.postSala);
app.get(
  "/resultados/:idSala",
  telaResultadoVotacaoControle.getResultadoVotacao
);

app.get("/resultados/:idSala/status", (req, res) =>
  res.send("Express + TypeScript Server")
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
