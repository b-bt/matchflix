import { Model, Column, Table } from "sequelize-typescript";

@Table
class Filme extends Model {
  @Column
  titulo: string;

  @Column
  descricao: string;

  @Column
  ano: number;
}

export default Filme;
