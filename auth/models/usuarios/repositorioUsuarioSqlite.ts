import { nanoid } from "nanoid";
import { Sequelize } from "sequelize-typescript";
import IRepositorioUsuario from "./repositorioUsuario.interface";
import Usuario from "./usuario.model";

class RepositorioUsuarioSQLite implements IRepositorioUsuario {
  conexao: Sequelize;

  constructor(conexao: Sequelize) {
    this.conexao = conexao;
  }

  getUsuarioByEmail = async (email: string): Promise<Usuario> => {
    const usuario = await Usuario.findOne({ where: { email: email } });
    if (!usuario) {
      throw new Error("Usuario com o email especificado nao existe");
    }

    return usuario;
  };

  addUsuario = async (
    nome: string,
    email: string,
    senha: string
  ): Promise<Usuario> => {
    const usuario = Usuario.create({
      nome: nome,
      email: email,
      senha: senha,
      token: nanoid(),
    });
    return usuario;
  };

  getUsuario = async (token: string): Promise<Usuario> => {
    const usuario = await Usuario.findOne({ where: { token: token } });
    if (!usuario) {
      throw new Error("Usuario com ID especificado nao existe");
    }

    return usuario;
  };
}

export default RepositorioUsuarioSQLite;
