import Fachada from "../fachada/fachada";
import IntencaoVoto from "../mensagens/intencaoVoto";
import Filme from "../models/filmes/filme.model";
import Sala from "../models/salas/sala.model";
import Voto from "../models/votos/voto.model";

class TelaSalaControle {
  votos: Voto[] = [];
  salaId: number;
  fachada: Fachada;

  constructor(salaId: number, fachada: Fachada) {
    this.salaId = salaId;
    this.fachada = fachada;
  }

  carregarFilmes = async (): Promise<Filme[]> => {
    return this.fachada.pegarFilmes(this.salaId);
  };

  enviarVotos = async (intencoesVoto: IntencaoVoto[]): Promise<boolean> => {
    return this.fachada.enviarVotos(intencoesVoto, this.salaId);
  };
  compartilharSala() {}
}

export default TelaSalaControle;
