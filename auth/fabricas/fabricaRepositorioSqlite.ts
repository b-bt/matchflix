import { Sequelize } from "sequelize-typescript";
import Filme from "../models/filmes/filme.model";
import IRepositorioFilme from "../models/filmes/repositorioFilme.interface";
import RepositorioFilmeSQLite from "../models/filmes/repositorioFilmeSQLite";
import IRepositorioSala from "../models/salas/repositorioSala.interface";
import RepositorioSalaSQLite from "../models/salas/repositorioSalaSQLite";
import Sala from "../models/salas/sala.model";
import Usuario from "../models/usuarios/usuario.model";
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

    const models = [Usuario, Sala, Filme, Voto];
    this.conexao.addModels(models);
    models.forEach((model) => model.sync());
  }

  criarRepositorioFilme(): IRepositorioFilme {
    return new RepositorioFilmeSQLite(this.conexao);
  }
  criarRepositorioSala(): IRepositorioSala {
    return new RepositorioSalaSQLite(this.conexao);
  }
  criarRepositorioVoto(): IRepositorioVoto {
    return new RepositorioVotoSQLite(this.conexao);
  }
}

export default FabricaRepositorioSQLite;
