import { Sequelize } from "sequelize-typescript";
import IRepositorioSala from "./repositorioSala.interface";
import Sala from "./sala.model";

class RepositorioSalaSQLite implements IRepositorioSala {
  conexao: Sequelize;

  constructor(conexao: Sequelize) {
    this.conexao = conexao;
  }

  getSala(id: number): Sala {
    throw new Error("Method not implemented.");
  }
}

export default RepositorioSalaSQLite;
