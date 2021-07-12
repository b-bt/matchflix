import express from "express";
import FabricaRepositorioSQLite from "./app/fabricas/fabricaRepositorioSqlite";
import Gerenciador from "./app/manager/gerenciador";

const app = express();
const PORT = 8100;
const fabricaRepositorio = new FabricaRepositorioSQLite();
const gerenciador = new Gerenciador(fabricaRepositorio);

app.get("/", (req, res) => res.send("Seja bem-vindo ao MatchFlix"));

app.get("/salas/:idSala", (req, res) => {
  // const instance = new TelaSalaControle(parseInt(req.params.idSala));
});

app.get("/resultados/:idSala/", (req, res) =>
  res.send("Express + TypeScript Server")
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
