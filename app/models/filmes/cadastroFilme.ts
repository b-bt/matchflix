class CadastroFilme {
  repositorio: IRepositorioFilme;
  constructor(repositorio: IRepositorioFilme) {
    this.repositorio = repositorio;
  }

  getFilmesDaSala = (sala: Sala): Filme[] => {
    return this.repositorio.getFilmes(sala);
  };
}
