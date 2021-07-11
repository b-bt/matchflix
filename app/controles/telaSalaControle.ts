class TelaSalaControle {
  votos: Voto[] = [];
  sala: Sala;
  fachada: Fachada;

  constructor(sala: number) {
    const repositorioSala = Gerenciador.instancia.repositorioSala;
    const cadastroSala = new CadastroSala(repositorioSala);
    this.sala = cadastroSala.getSala(sala);
    this.fachada = Gerenciador.instancia.fachada;
  }

  carregarFilmes(): Filme[] {
    return this.fachada.pegarFilmes(this.sala);
  }

  votar(querAssistir: boolean, filme: Filme) {}
  compartilharSala() {}
}
