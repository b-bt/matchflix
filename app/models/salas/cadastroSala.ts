import IRepositorioSala from "./repositorioSala.interface";
import Sala from "./sala.model";

class CadastroSala {
  repositorio: IRepositorioSala;
  constructor(repositorio: IRepositorioSala) {
    this.repositorio = repositorio;
  }

  getSala = (idSala: number): Promise<Sala> => {
    return this.repositorio.getSala(idSala);
  };
}

export default CadastroSala;
