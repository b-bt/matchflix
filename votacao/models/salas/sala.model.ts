import { Model, Column, Table, HasMany } from "sequelize-typescript";
import Filme from "../filmes/filme.model";
import Voto from "../votos/voto.model";

@Table
class Sala extends Model {
  @Column
  participantes: number;

  @HasMany(() => Filme)
  filmes: Filme[];

  @HasMany(() => Voto)
  votos: Voto[];
}

export default Sala;
