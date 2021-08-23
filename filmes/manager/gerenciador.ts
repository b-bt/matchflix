import FabricaAbstrataRepositorio from "../fabricas/fabricaAbstrataRepositorios.interface";
import IRepositorioFilme from "../models/filmes/repositorioFilme.interface";

class Gerenciador {
  repositorioFilme: IRepositorioFilme;

  constructor(fabricaRepositorio: FabricaAbstrataRepositorio) {
    this.repositorioFilme = fabricaRepositorio.criarRepositorioFilme();
  }
}

export default Gerenciador;
