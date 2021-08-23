import axios from "axios";

class VotacaoService {
  static criarSala = async (
    qtdParticipantes: number,
    token: string
  ): Promise<Record<string, any>[]> => {
    try {
      const res = await axios.post(
        `http://votacao-service:8100/salas`,
        {
          qtdParticipantes: qtdParticipantes,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  static getSala = async (
    salaId: number,
    token: string
  ): Promise<Record<string, any>[]> => {
    try {
      const res = await axios.get(
        `http://votacao-service:8100/salas/${salaId}`,
        {
          headers: {
            token: token,
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  static addVotos = async (
    salaId: number,
    intencoesVoto: Record<string, any>[],
    token: string
  ): Promise<Record<string, any>[]> => {
    try {
      const res = await axios.post(
        `http://votacao-service:8100/salas/${salaId}`,
        intencoesVoto,
        {
          headers: {
            token: token,
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  static getResultadoVotacao = async (
    salaId: number,
    token: string
  ): Promise<Record<string, any>[]> => {
    try {
      const res = await axios.get(
        `http://votacao-service:8100/resultados/${salaId}`,
        {
          headers: {
            token: token,
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  };
}

export default VotacaoService;
