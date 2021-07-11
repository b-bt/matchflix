class CadastroSala {
  repositorio: IRepositorioSala;
  constructor(repositorio: IRepositorioSala) {
    this.repositorio = repositorio;
  }

  getSala = (idSala: number): Sala => {
    return this.repositorio.getSala(idSala);
  };
}
