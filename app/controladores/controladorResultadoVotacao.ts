import Gerenciador from "../manager/gerenciador";
import ResultadoVotosFilme from "../mensagens/resultadoVotosFilme";
import CadastroSala from "../models/salas/cadastroSala";
import Sala from "../models/salas/sala.model";
import CadastroVoto from "../models/votos/cadastroVoto";
import Voto from "../models/votos/voto.model";

class ControladorResultadoVotacao {
  cadastroVoto: CadastroVoto;
  cadastroSala: CadastroSala;

  constructor(gerenciador: Gerenciador) {
    const repositorioVoto = gerenciador.repositorioVoto;
    const repositorioSala = gerenciador.repositorioSala;
    this.cadastroVoto = new CadastroVoto(repositorioVoto);
    this.cadastroSala = new CadastroSala(repositorioSala);
  }

  calcularResultado = async (
    salaId: number
  ): Promise<ResultadoVotosFilme[]> => {
    const sala = await this.cadastroSala.getSala(salaId);
    const votos = sala.votos;

    const resultados = votos.reduce((acc, voto) => {
      if (voto.querAssistir) {
        const resultadoFilme = acc.find(
          (resultado) => resultado.filme.id === voto.filmeId
        );

        if (resultadoFilme == null) {
          acc.push(new ResultadoVotosFilme(voto.filme, 1));
        } else {
          resultadoFilme.votos++;
        }
      }
      return acc;
    }, new Array<ResultadoVotosFilme>());

    return resultados.sort((r1, r2) => r2.votos - r1.votos);
  };

  verificarVotacaoAcabou = (sala: Sala): boolean => {
    const qtdVotos = this.cadastroVoto.getQuantVotos(sala);
    const numMaxVotos = sala.participantes * sala.filmes.length;
    return qtdVotos >= numMaxVotos;
  };
}

export default ControladorResultadoVotacao;
