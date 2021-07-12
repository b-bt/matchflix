import Filme from "../filmes/filme.model";
import Sala from "../salas/sala.model";
import Voto from "./voto.model";

interface IRepositorioVoto {
  getVotos(filme: Filme, sala: Sala): Voto[];
  getQuantVotos(sala: Sala): number;
  salvarVotos(votos: Voto[]): void;
}

export default IRepositorioVoto;
