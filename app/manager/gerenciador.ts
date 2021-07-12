import FabricaAbstrataRepositorio from "../fabricas/fabricaAbstrataRepositorios.interface";
import Fachada from "../fachada/fachada";
import IRepositorioFilme from "../models/filmes/repositorioFilme.interface";
import IRepositorioSala from "../models/salas/repositorioSala.interface";
import IRepositorioVoto from "../models/votos/repositorioVoto.interface";

class Gerenciador {
  fachada: Fachada;
  repositorioFilme: IRepositorioFilme;
  repositorioSala: IRepositorioSala;
  repositorioVoto: IRepositorioVoto;

  constructor(fabricaRepositorio: FabricaAbstrataRepositorio) {
    this.repositorioSala = fabricaRepositorio.criarRepositorioSala();
    this.repositorioFilme = fabricaRepositorio.criarRepositorioFilme();
    this.repositorioVoto = fabricaRepositorio.criarRepositorioVoto();
  }
}

export default Gerenciador;
