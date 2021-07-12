class TelaResultadoVotacaoControle {
  fachada: Fachada;

  constructor() {
    this.fachada = Gerenciador.instancia.fachada;
  }

  verificarVotacaoAcabou = (sala: Sala): boolean => {
    return this.fachada.verificarVotacaoAcabou(sala);
  };

  visualizarResultado = (sala: Sala): ResultadoVotosFilme[] => {
    return this.fachada.calcularResultado(sala);
  };
}
