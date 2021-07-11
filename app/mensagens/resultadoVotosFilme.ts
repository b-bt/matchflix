class ResultadoVotosFilme {
  votos: Voto[];
  filme: Filme;

  constructor(filme: Filme, votos: Voto[]) {
    this.filme = filme;
    this.votos = votos;
  }
}
