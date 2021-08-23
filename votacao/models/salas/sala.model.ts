import { Model, Column, Table, HasMany } from "sequelize-typescript";
import Voto from "../votos/voto.model";

@Table
class Sala extends Model {
  @Column
  participantes: number;

  @Column
  filmesIds: string;

  @HasMany(() => Voto)
  votos: Voto[];

  getFilmesIds() {
    return this.filmesIds.split(",");
  }

  setFilmesIds(filmes: { id: string }[]) {
    const ids: string = filmes.map((filme) => filme.id).join(",");
    this.set("filmesIds", ids);
  }
}

export default Sala;
