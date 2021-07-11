class Gerenciador {
  static instancia: Gerenciador = new Gerenciador();

  fachada: Fachada;
  repositorioFilme: IRepositorioFilme;
  repositorioSala: IRepositorioSala;
  repositorioVoto: IRepositorioVoto;

  private constructor() {
    //   TODO: Replace with factory
    this.fachada = new Fachada();
    this.repositorioFilme = new RepositorioFilmePG();
    this.repositorioSala = new RepositorioSalaPG();
    this.repositorioVoto = new RepositorioVotoPG();
  }
}
