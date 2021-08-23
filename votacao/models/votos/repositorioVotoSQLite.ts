import { Sequelize } from "sequelize-typescript";
import IntencaoVoto from "../../mensagens/intencaoVoto";
import Sala from "../salas/sala.model";
import IRepositorioVoto from "./repositorioVoto.interface";
import Voto from "./voto.model";

class RepositorioVotoSQLite implements IRepositorioVoto {
  conexao: Sequelize;

  constructor(conexao: Sequelize) {
    this.conexao = conexao;
  }
  getVotos(filmeId: string, sala: Sala): Voto[] {
    // TODO: Call SQLite SELECT
    throw new Error("Method not implemented.");
  }

  getQuantVotos(sala: Sala): number {
    // TODO: Call SQLITE COUNT
    throw new Error("Method not implemented.");
  }

  salvarVotos = async (
    intencoesVoto: IntencaoVoto[],
    salaId: number,
    usuarioId: number
  ): Promise<boolean> => {
    const votos = intencoesVoto.map((intencao) =>
      Voto.build({
        filmeId: intencao.filmeId,
        querAssistir: intencao.querAssistir,
        usuarioId: usuarioId,
        salaId: salaId,
      })
    );
    try {
      const votosSalvos = await Voto.bulkCreate(
        votos.map((voto) => ({
          filmeId: voto.filmeId,
          querAssistir: voto.querAssistir,
          usuarioId: voto.usuarioId,
          salaId: voto.salaId,
        }))
      );
      console.log(votosSalvos);
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  };
}

export default RepositorioVotoSQLite;
