import Fachada from "../fachada/fachada";
import ResultadoVotosFilme from "../mensagens/resultadoVotosFilme";
import Sala from "../models/salas/sala.model";

class TelaResultadoVotacaoControle {
  salaId: number;
  fachada: Fachada;

  constructor(salaId: number, fachada: Fachada) {
    this.salaId = salaId;
    this.fachada = fachada;
  }

  verificarVotacaoAcabou = (sala: Sala): boolean => {
    return this.fachada.verificarVotacaoAcabou(sala);
  };

  visualizarResultado = async (
    salaId: number
  ): Promise<ResultadoVotosFilme[]> => {
    return this.fachada.calcularResultado(salaId);
  };
}

export default TelaResultadoVotacaoControle;
