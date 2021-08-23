import { Sequelize } from "sequelize-typescript";
import Voto from "../votos/voto.model";
import IRepositorioSala from "./repositorioSala.interface";
import Sala from "./sala.model";

class RepositorioSalaSQLite implements IRepositorioSala {
  conexao: Sequelize;

  constructor(conexao: Sequelize) {
    this.conexao = conexao;
  }
  addSala = async (
    qtdParticipantes: number,
    filmes: Record<string, any>[]
  ): Promise<Sala> => {
    const sala = Sala.build();
    sala.set("participantes", qtdParticipantes);
    sala.setFilmesIds(filmes as { id: string }[]);
    return await sala.save();
  };

  async getSala(id: number): Promise<Sala> {
    const sala = await Sala.findByPk(id, { include: { model: Voto } });
    if (!sala) {
      throw new Error("Sala com o ID especificado nao existe");
    }
    return sala;
  }
}

export default RepositorioSalaSQLite;
