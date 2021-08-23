import Sala from "./sala.model";

interface IRepositorioSala {
  getSala(id: number): Promise<Sala>;
  addSala(
    qtdParticipantes: number,
    filmes: Record<string, any>[]
  ): Promise<Sala>;
}

export default IRepositorioSala;
