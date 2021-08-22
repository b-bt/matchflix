class InfoAdicionalFilme {
  nota: number;
  servicos: Servico[];
  filme: Filme;

  constructor(nota: number, servicos: Servico[], filme: Filme) {
    this.nota = nota;
    this.servicos = servicos;
    this.filme = filme;
  }
}
