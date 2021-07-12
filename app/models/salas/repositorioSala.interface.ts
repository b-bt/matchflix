import Sala from "./sala.model";

interface IRepositorioSala {
  getSala(id: number): Sala;
}

export default IRepositorioSala;
