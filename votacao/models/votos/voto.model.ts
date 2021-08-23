import {
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Sala from "../salas/sala.model";

@Table
class Voto extends Model {
  @Column
  querAssistir: boolean;

  @Column
  filmeId: number;

  @ForeignKey(() => Sala)
  @Column
  salaId: number;

  @BelongsTo(() => Sala)
  sala: Sala;

  @Column
  usuarioId: number;
}

export default Voto;
