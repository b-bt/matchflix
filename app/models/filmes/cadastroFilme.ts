import Sala from "../salas/sala.model";
import Filme from "./filme.model";
import IRepositorioFilme from "./repositorioFilme.interface";

class CadastroFilme {
  repositorio: IRepositorioFilme;
  constructor(repositorio: IRepositorioFilme) {
    this.repositorio = repositorio;
  }

  getFilmesDaSala = (sala: Sala): Filme[] => {
    return this.repositorio.getFilmes(sala);
  };
}

export default CadastroFilme;
