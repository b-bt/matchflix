import { Sequelize } from "sequelize-typescript";
import Sala from "../salas/sala.model";
import Filme from "./filme.model";
import IRepositorioFilme from "./repositorioFilme.interface";

class RepositorioFilmeSQLite implements IRepositorioFilme {
  conexao: Sequelize;

  constructor(conexao: Sequelize) {
    this.conexao = conexao;
  }

  getFilmes(sala: Sala): Filme[] {
    //   TODO: Call SQLite SELECT
    throw new Error("Method not implemented.");
  }
}

export default RepositorioFilmeSQLite;
