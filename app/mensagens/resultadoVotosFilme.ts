import Filme from "../models/filmes/filme.model";
import Voto from "../models/votos/voto.model";

class ResultadoVotosFilme {
  votos: number;
  filme: Filme;

  constructor(filme: Filme, votos: number) {
    this.filme = filme;
    this.votos = votos;
  }
}

export default ResultadoVotosFilme;
