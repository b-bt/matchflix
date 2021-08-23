import express from "express";
import FabricaRepositorioSQLite from "./fabricas/fabricaRepositorioSqlite";
import Gerenciador from "./manager/gerenciador";
import ControladorFilmes from "./controladores/controladorFilmes";

const app = express();
app.use(express.json());

const PORT = 8100;
const fabricaRepositorio = new FabricaRepositorioSQLite();
const gerenciador = new Gerenciador(fabricaRepositorio);
const controladorFilmes = new ControladorFilmes(gerenciador);

app.get("/filmes", controladorFilmes.pegarFilmes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
