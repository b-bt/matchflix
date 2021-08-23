import IRepositorioSala from "../models/salas/repositorioSala.interface";
import IRepositorioVoto from "../models/votos/repositorioVoto.interface";

interface FabricaAbstrataRepositorio {
  criarRepositorioSala(): IRepositorioSala;
  criarRepositorioVoto(): IRepositorioVoto;
}

export default FabricaAbstrataRepositorio;
