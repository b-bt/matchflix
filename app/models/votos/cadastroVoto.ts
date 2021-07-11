class CadastroVoto {
  repositorio: IRepositorioVoto;
  constructor(repositorio: IRepositorioVoto) {
    this.repositorio = repositorio;
  }

  salvarVotos = (votos: Voto[]): void => {
    this.repositorio.salvarVotos(votos);
  };
}
