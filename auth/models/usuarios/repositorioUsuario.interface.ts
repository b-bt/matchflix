import Usuario from "./usuario.model";

interface IRepositorioUsuario {
  getUsuario(token: string): Promise<Usuario>;
  addUsuario(nome: string, email: string, senha: string): Promise<Usuario>;
  getUsuarioByEmail(email: string): Promise<Usuario>;
}

export default IRepositorioUsuario;
