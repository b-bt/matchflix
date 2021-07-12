import {
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Filme from "../filmes/filme.model";
import Sala from "../salas/sala.model";
import Usuario from "../usuarios/usuario.model";

@Table
class Voto extends Model {
  @Column
  querAssistir: boolean;

  @ForeignKey(() => Filme)
  @Column
  filmeId: number;

  @BelongsTo(() => Filme)
  filme: Filme;

  @ForeignKey(() => Sala)
  @Column
  salaId: number;

  @BelongsTo(() => Sala)
  sala: Sala;

  @ForeignKey(() => Usuario)
  @Column
  usuarioId: number;

  @BelongsTo(() => Usuario)
  usuario: Usuario;
}

export default Voto;
