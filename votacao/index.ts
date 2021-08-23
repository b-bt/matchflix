import express from "express";
import ControladorResultadoVotacao from "./controladores/controladorResultadoVotacao";
import ControladorSala from "./controladores/controladorSala";
import FabricaRepositorioSQLite from "./fabricas/fabricaRepositorioSqlite";
import Gerenciador from "./manager/gerenciador";
import IntencaoVoto from "./mensagens/intencaoVoto";

const app = express();
app.use(express.json());

const PORT = 8100;
const fabricaRepositorio = new FabricaRepositorioSQLite();
const gerenciador = new Gerenciador(fabricaRepositorio);

const controladorSala = new ControladorSala(gerenciador);
const controladorResultado = new ControladorResultadoVotacao(gerenciador);

app.get("/", (req, res) => res.send("Seja bem-vindo ao MatchFlix"));

app.get("/salas/:idSala", controladorSala.getSala);
app.post("/salas", controladorSala.criarSala);
app.post("/salas/:idSala", controladorSala.addVotos);
app.get("/resultados/:idSala", controladorResultado.getResultadoVotacao);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
