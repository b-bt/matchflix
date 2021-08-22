import { Model, Table, HasMany } from "sequelize-typescript";
import Voto from "../votos/voto.model";

@Table
class Usuario extends Model {
  @HasMany(() => Voto)
  votos: Voto[];
}
export default Usuario;
