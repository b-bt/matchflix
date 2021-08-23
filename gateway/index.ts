import express from "express";
import ControladorGateway from "./controladores/controladorGateway";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8100;

const controladorGateway = new ControladorGateway();

app.post("/login", controladorGateway.login);
app.post("/salas", controladorGateway.criarSala);
app.get("/salas/:salaId", controladorGateway.getSala);
app.post("/salas/:salaId", controladorGateway.addVotos);
app.get("/resultados/:salaId", controladorGateway.getResultadoVotacao);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
