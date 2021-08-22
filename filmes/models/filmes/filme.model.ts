import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Sala from "../salas/sala.model";

@Table
class Filme extends Model {
  @Column
  titulo: string;

  @Column
  descricao: string;

  @ForeignKey(() => Sala)
  @Column
  salaId: number;

  @BelongsTo(() => Sala)
  sala: Sala;
}

export default Filme;
