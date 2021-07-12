import ControladorResultadoVotacao from "../controladores/controladorResultadoVotacao";
import ControladorSala from "../controladores/controladorSala";
import Gerenciador from "../manager/gerenciador";
import IntencaoVoto from "../mensagens/intencaoVoto";
import ResultadoVotosFilme from "../mensagens/resultadoVotosFilme";
import Filme from "../models/filmes/filme.model";
import Sala from "../models/salas/sala.model";
import Voto from "../models/votos/voto.model";

class Fachada {
  controladorSala: ControladorSala;
  controladorResultadoVotacao: ControladorResultadoVotacao;

  constructor(gerenciador: Gerenciador) {
    this.controladorSala = new ControladorSala(gerenciador);
    this.controladorResultadoVotacao = new ControladorResultadoVotacao(
      gerenciador
    );
  }

  pegarFilmes = async (salaId: number): Promise<Filme[]> => {
    return this.controladorSala.pegarFilmes(salaId);
  };

  enviarVotos(votos: IntencaoVoto[], salaId: number): Promise<boolean> {
    return this.controladorSala.enviarVotos(votos, salaId);
  }

  calcularResultado(sala: Sala): ResultadoVotosFilme[] {
    return this.controladorResultadoVotacao.calcularResultado(sala);
  }

  verificarVotacaoAcabou(sala: Sala): boolean {
    return this.controladorResultadoVotacao.verificarVotacaoAcabou(sala);
  }
}

export default Fachada;
