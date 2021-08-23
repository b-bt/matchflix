import IRepositorioUsuario from "../models/usuarios/repositorioUsuario.interface";

interface FabricaAbstrataRepositorio {
  criarRepositorioUsuario(): IRepositorioUsuario;
}

export default FabricaAbstrataRepositorio;
