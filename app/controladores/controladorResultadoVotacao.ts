import Gerenciador from "../manager/gerenciador";
import ResultadoVotosFilme from "../mensagens/resultadoVotosFilme";
import Sala from "../models/salas/sala.model";
import CadastroVoto from "../models/votos/cadastroVoto";
import Voto from "../models/votos/voto.model";

class ControladorResultadoVotacao {
  cadastroVoto: CadastroVoto;

  constructor(gerenciador: Gerenciador) {
    const repositorioVoto = gerenciador.repositorioVoto;
    this.cadastroVoto = new CadastroVoto(repositorioVoto);
  }

  calcularResultado = (sala: Sala): ResultadoVotosFilme[] => {
    const filmes = sala.filmes;
    const resultados: ResultadoVotosFilme[] = [];

    filmes.forEach((filme) => {
      const votos = this.cadastroVoto.getVotos(filme, sala);
      resultados.push(this.consolidarVotos(votos));
    });

    return resultados;
  };

  verificarVotacaoAcabou = (sala: Sala): boolean => {
    const qtdVotos = this.cadastroVoto.getQuantVotos(sala);
    const numMaxVotos = sala.participantes * sala.filmes.length;
    return qtdVotos >= numMaxVotos;
  };

  private consolidarVotos = (votos: Voto[]): ResultadoVotosFilme => {
    if (votos.length === 0)
      throw new Error("Lista de votos não pode ser vazia");

    const votosPositivos = votos.filter((voto) => voto.querAssistir);

    const filme = votos[0].filme;

    return new ResultadoVotosFilme(filme, votosPositivos);
  };
}

export default ControladorResultadoVotacao;
