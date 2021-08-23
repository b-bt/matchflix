import { Sequelize } from "sequelize-typescript";
import Filme from "../models/filmes/filme.model";
import IRepositorioFilme from "../models/filmes/repositorioFilme.interface";
import RepositorioFilmeSQLite from "../models/filmes/repositorioFilmeSQLite";
import FabricaAbstrataRepositorio from "./fabricaAbstrataRepositorios.interface";

class FabricaRepositorioSQLite implements FabricaAbstrataRepositorio {
  conexao: Sequelize;

  constructor() {
    this.conexao = new Sequelize({
      dialect: "sqlite",
      storage: "db.sqlite",
    });

    const models = [Filme];
    this.conexao.addModels(models);
    models.forEach((model) => model.sync());
  }

  criarRepositorioFilme(): IRepositorioFilme {
    return new RepositorioFilmeSQLite(this.conexao);
  }
}

export default FabricaRepositorioSQLite;
