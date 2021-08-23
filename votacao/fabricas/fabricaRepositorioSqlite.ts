import { Sequelize } from "sequelize-typescript";
import IRepositorioSala from "../models/salas/repositorioSala.interface";
import RepositorioSalaSQLite from "../models/salas/repositorioSalaSQLite";
import Sala from "../models/salas/sala.model";
import IRepositorioVoto from "../models/votos/repositorioVoto.interface";
import RepositorioVotoSQLite from "../models/votos/repositorioVotoSQLite";
import Voto from "../models/votos/voto.model";
import FabricaAbstrataRepositorio from "./fabricaAbstrataRepositorios.interface";

class FabricaRepositorioSQLite implements FabricaAbstrataRepositorio {
  conexao: Sequelize;

  constructor() {
    this.conexao = new Sequelize({
      dialect: "sqlite",
      storage: "db.sqlite",
    });

    const models = [Sala, Voto];
    this.conexao.addModels(models);
    models.forEach((model) => model.sync());
  }

  criarRepositorioSala(): IRepositorioSala {
    return new RepositorioSalaSQLite(this.conexao);
  }
  criarRepositorioVoto(): IRepositorioVoto {
    return new RepositorioVotoSQLite(this.conexao);
  }
}

export default FabricaRepositorioSQLite;
