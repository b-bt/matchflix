import IRepositorioFilme from "../models/filmes/repositorioFilme.interface";

interface FabricaAbstrataRepositorio {
  criarRepositorioFilme(): IRepositorioFilme;
}

export default FabricaAbstrataRepositorio;
