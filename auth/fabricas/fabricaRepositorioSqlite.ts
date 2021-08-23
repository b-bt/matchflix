import { Sequelize } from "sequelize-typescript";
import Usuario from "../models/usuarios/usuario.model";
import IRepositorioUsuario from "../models/usuarios/repositorioUsuario.interface";
import RepositorioUsuarioSQLite from "../models/usuarios/repositorioUsuarioSqlite";
import FabricaAbstrataRepositorio from "./fabricaAbstrataRepositorios.interface";

class FabricaRepositorioSQLite implements FabricaAbstrataRepositorio {
  conexao: Sequelize;

  constructor() {
    this.conexao = new Sequelize({
      dialect: "sqlite",
      storage: "db.sqlite",
    });

    const models = [Usuario];
    this.conexao.addModels(models);
    models.forEach((model) => model.sync());
  }
  criarRepositorioUsuario(): IRepositorioUsuario {
    return new RepositorioUsuarioSQLite(this.conexao);
  }
}

export default FabricaRepositorioSQLite;
