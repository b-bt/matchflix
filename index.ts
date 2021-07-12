import express from "express";
import path from "path";
import TelaSalaControle from "./app/controles/telaSalaControle";
import FabricaRepositorioSQLite from "./app/fabricas/fabricaRepositorioSqlite";
import Fachada from "./app/fachada/fachada";
import Gerenciador from "./app/manager/gerenciador";
import IntencaoVoto from "./app/mensagens/intencaoVoto";

const app = express();
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "app/telas"));

app.use(express.static(path.join(__dirname, "app/static")));

const PORT = 8100;
const fabricaRepositorio = new FabricaRepositorioSQLite();
const gerenciador = new Gerenciador(fabricaRepositorio);
const fachada = new Fachada(gerenciador);

app.get("/", (req, res) => res.send("Seja bem-vindo ao MatchFlix"));

app.get("/salas/:idSala", async (req, res) => {
  const salaId = parseInt(req.params.idSala);
  const tela = new TelaSalaControle(salaId, fachada);

  try {
    const filmes = await tela.carregarFilmes();
    res.render("vote", { filmes: filmes });
  } catch (error) {
    res.send(error);
  }
});

app.post("/salas/:idSala", async (req, res) => {
  const votos: IntencaoVoto[] = req.body;
  const salaId = parseInt(req.params.idSala);
  const tela = new TelaSalaControle(salaId, fachada);

  try {
    const status = await tela.enviarVotos(votos);
    res.send("OK");
  } catch (error) {
    res.send(error);
  }
});

app.get("/resultados/:idSala", (req, res) =>
  res.send("Express + TypeScript Server")
);

app.get("/resultados/:idSala/status", (req, res) =>
  res.send("Express + TypeScript Server")
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
