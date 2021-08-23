import { Model, Table, HasMany, Column } from "sequelize-typescript";

@Table
class Usuario extends Model {
  @Column
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column
  senha: string;

  @Column({ unique: true })
  token: string;
}
export default Usuario;
