import { Sequelize } from "sequelize-typescript";
import Filme from "./filme.model";
import IRepositorioFilme from "./repositorioFilme.interface";

class RepositorioFilmeSQLite implements IRepositorioFilme {
  conexao: Sequelize;

  constructor(conexao: Sequelize) {
    this.conexao = conexao;
  }
  addFilmes = async (
    filmes: { id: string; titulo: string; descricao: string; ano: number }[]
  ): Promise<Filme[]> => {
    return Filme.bulkCreate(filmes, { ignoreDuplicates: true });
  };

  getFilmes = async (filmesIds: number[]): Promise<Filme[]> => {
    return Filme.findAll({
      where: {
        id: filmesIds,
      },
    });
  };
}

export default RepositorioFilmeSQLite;
