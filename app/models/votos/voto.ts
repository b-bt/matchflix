class Voto {
  querAssistir: boolean;
  filme: Filme;
  sala: Sala;
  usuario: Usuario;

  constructor(
    querAssistir: boolean,
    filme: Filme,
    sala: Sala,
    usuario: Usuario
  ) {
    this.querAssistir = querAssistir;
    this.filme = filme;
    this.sala = sala;
    this.usuario = usuario;
  }
}
