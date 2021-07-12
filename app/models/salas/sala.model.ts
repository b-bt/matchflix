import { Model, Column, Table, HasMany } from "sequelize-typescript";
import Filme from "../filmes/filme.model";

@Table
class Sala extends Model {
  @Column
  participantes: number;

  @HasMany(() => Filme)
  filmes: Filme[];
}

export default Sala;
