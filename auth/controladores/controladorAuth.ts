import Gerenciador from "../manager/gerenciador";
import { Request, Response } from "express";
import IRepositorioUsuario from "../models/usuarios/repositorioUsuario.interface";
import Usuario from "../models/usuarios/usuario.model";

class ControladorAuth {
  repositorioUsuario: IRepositorioUsuario;
  constructor(gerenciador: Gerenciador) {
    this.repositorioUsuario = gerenciador.repositorioUsuario;
  }

  login = async (req: Request, res: Response) => {
    const usuario = (await req.user) as Usuario;
    res.json({
      nome: usuario.getDataValue("nome"),
      email: usuario.getDataValue("email"),
      token: usuario.getDataValue("token"),
    });
  };

  cadastrar = async (req: Request, res: Response) => {
    const nome: string = req.body.nome;
    const email: string = req.body.email;
    const senha: string = req.body.senha;
    const usuario = await this.repositorioUsuario.addUsuario(
      nome,
      email,
      senha
    );

    res.json({
      nome: usuario.getDataValue("nome"),
      email: usuario.getDataValue("email"),
      token: usuario.getDataValue("token"),
    });
  };

  logout = async (req: Request, res: Response) => {
    req.logout();
    res.json({});
  };

  checarUsuario = async (req: Request, res: Response) => {
    const usuario = (await req.user) as Usuario;
    res.json({
      nome: usuario.getDataValue("nome"),
      email: usuario.getDataValue("email"),
      token: usuario.getDataValue("token"),
    });
  };
}

export default ControladorAuth;
