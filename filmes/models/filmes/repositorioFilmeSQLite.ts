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
    return await Filme.bulkCreate(filmes, { ignoreDuplicates: true });
  };

  getFilmes = async (filmes: Record<string, any>[]): Promise<Filme[]> => {
    return Filme.findAll({ limit: 10 });
  };
}

export default RepositorioFilmeSQLite;
