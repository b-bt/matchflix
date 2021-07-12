import Sala from "../salas/sala.model";
import Filme from "./filme.model";

interface IRepositorioFilme {
  getFilmes(sala: Sala): Filme[];
}

export default IRepositorioFilme;
