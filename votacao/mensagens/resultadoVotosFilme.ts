import Voto from "../models/votos/voto.model";

class ResultadoVotosFilme {
  votos: number;
  filme: Record<string, any>;

  constructor(filme: Record<string, any>, votos: number) {
    this.filme = filme;
    this.votos = votos;
  }
}

export default ResultadoVotosFilme;
