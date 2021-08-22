import Sala from "./sala.model";

interface IRepositorioSala {
  getSala(id: number): Promise<Sala>;
}

export default IRepositorioSala;
