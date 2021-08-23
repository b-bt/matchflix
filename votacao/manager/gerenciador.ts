import FabricaAbstrataRepositorio from "../fabricas/fabricaAbstrataRepositorios.interface";
import IRepositorioSala from "../models/salas/repositorioSala.interface";
import IRepositorioVoto from "../models/votos/repositorioVoto.interface";

class Gerenciador {
  repositorioSala: IRepositorioSala;
  repositorioVoto: IRepositorioVoto;

  constructor(fabricaRepositorio: FabricaAbstrataRepositorio) {
    this.repositorioSala = fabricaRepositorio.criarRepositorioSala();
    this.repositorioVoto = fabricaRepositorio.criarRepositorioVoto();
  }
}

export default Gerenciador;
