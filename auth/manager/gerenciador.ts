import FabricaAbstrataRepositorio from "../fabricas/fabricaAbstrataRepositorios.interface";
import IRepositorioUsuario from "../models/usuarios/repositorioUsuario.interface";

class Gerenciador {
  repositorioUsuario: IRepositorioUsuario;

  constructor(fabricaRepositorio: FabricaAbstrataRepositorio) {
    this.repositorioUsuario = fabricaRepositorio.criarRepositorioUsuario();
  }
}

export default Gerenciador;
