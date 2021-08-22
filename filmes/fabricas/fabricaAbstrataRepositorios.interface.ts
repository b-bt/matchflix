import IRepositorioFilme from "../models/filmes/repositorioFilme.interface";
import IRepositorioSala from "../models/salas/repositorioSala.interface";
import IRepositorioVoto from "../models/votos/repositorioVoto.interface";

interface FabricaAbstrataRepositorio {
  criarRepositorioFilme(): IRepositorioFilme;
  criarRepositorioSala(): IRepositorioSala;
  criarRepositorioVoto(): IRepositorioVoto;
}

export default FabricaAbstrataRepositorio;
