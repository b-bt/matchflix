class ControladorSala {
  cadastroFilmes: CadastroFilme;
  cadastroVotos: CadastroVoto;

  constructor() {
    const repositorioFilme = Gerenciador.instancia.repositorioFilme;
    const repositorioVoto = Gerenciador.instancia.repositorioVoto;
    this.cadastroFilmes = new CadastroFilme(repositorioFilme);
    this.cadastroVotos = new CadastroVoto(repositorioVoto);
  }

  pegarFilmes = (sala: Sala): Filme[] => {
    return this.cadastroFilmes.getFilmesDaSala(sala);
  };

  enviarVotos = (votos: Voto[]): void => {
    this.cadastroVotos.salvarVotos(votos);
  };
}
