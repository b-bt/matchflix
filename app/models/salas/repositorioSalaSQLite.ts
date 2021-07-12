import { Sequelize } from "sequelize-typescript";
import Filme from "../filmes/filme.model";
import IRepositorioSala from "./repositorioSala.interface";
import Sala from "./sala.model";

class RepositorioSalaSQLite implements IRepositorioSala {
  conexao: Sequelize;

  constructor(conexao: Sequelize) {
    this.conexao = conexao;
  }

  async getSala(id: number): Promise<Sala> {
    const sala = await Sala.findByPk(id, {
      rejectOnEmpty: true,
      include: Filme,
    });
    return sala;
  }
}

export default RepositorioSalaSQLite;
