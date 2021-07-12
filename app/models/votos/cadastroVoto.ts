import Filme from "../filmes/filme.model";
import Sala from "../salas/sala.model";
import IRepositorioVoto from "./repositorioVoto.interface";
import Voto from "./voto.model";

class CadastroVoto {
  repositorio: IRepositorioVoto;
  constructor(repositorio: IRepositorioVoto) {
    this.repositorio = repositorio;
  }

  getQuantVotos(sala: Sala): number {
    return this.repositorio.getQuantVotos(sala);
  }

  getVotos(filme: Filme, sala: Sala): Voto[] {
    return this.repositorio.getVotos(filme, sala);
  }

  salvarVotos = (votos: Voto[]): void => {
    this.repositorio.salvarVotos(votos);
  };
}

export default CadastroVoto;
