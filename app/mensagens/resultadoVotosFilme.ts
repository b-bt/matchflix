import Filme from "../models/filmes/filme.model";
import Voto from "../models/votos/voto.model";

class ResultadoVotosFilme {
  votos: Voto[];
  filme: Filme;

  constructor(filme: Filme, votos: Voto[]) {
    this.filme = filme;
    this.votos = votos;
  }
}

export default ResultadoVotosFilme;
