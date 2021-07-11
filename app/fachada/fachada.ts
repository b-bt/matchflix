class Fachada {
  controladorSala: ControladorSala;
  controladorResultadoVotacao: ControladorResultadoVotacao;

  constructor() {
    this.controladorSala = new ControladorSala();
    this.controladorResultadoVotacao = new ControladorResultadoVotacao();
  }

  pegarFilmes(sala: Sala): Filme[] {
    return this.controladorSala.pegarFilmes(sala);
  }

  enviarVotos(votos: Voto[]) {
    return this.controladorSala.enviarVotos(votos);
  }

  calcularResultado(sala: Sala): ResultadoVotosFilme[] {
    return this.controladorResultadoVotacao.calcularResultado(sala);
  }

  verificarVotacaoAcabou(sala: Sala): boolean {
    return this.controladorResultadoVotacao.verificarVotacaoAcabou(sala);
  }
}
