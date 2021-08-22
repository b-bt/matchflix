import { Sequelize } from "sequelize-typescript";
import Filme from "../filmes/filme.model";
import Sala from "../salas/sala.model";
import IRepositorioVoto from "./repositorioVoto.interface";
import Voto from "./voto.model";

class RepositorioVotoSQLite implements IRepositorioVoto {
  conexao: Sequelize;

  constructor(conexao: Sequelize) {
    this.conexao = conexao;
  }
  getVotos(filme: Filme, sala: Sala): Voto[] {
    // TODO: Call SQLite SELECT
    throw new Error("Method not implemented.");
  }

  getQuantVotos(sala: Sala): number {
    // TODO: Call SQLITE COUNT
    throw new Error("Method not implemented.");
  }

  salvarVotos = async (votos: Voto[]): Promise<boolean> => {
    try {
      await Voto.bulkCreate(
        votos.map((voto) => ({
          filmeId: voto.filmeId,
          querAssistir: voto.querAssistir,
          usuarioId: voto.usuarioId,
          salaId: voto.salaId,
        }))
      );
      return true;
    } catch (error) {
      return false;
    }
  };
}

export default RepositorioVotoSQLite;
