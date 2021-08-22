import IntencaoVoto from "../../mensagens/intencaoVoto";
import Filme from "../filmes/filme.model";
import Sala from "../salas/sala.model";
import IRepositorioVoto from "./repositorioVoto.interface";
import Voto from "./voto.model";

class CadastroVoto {
  repositorio: IRepositorioVoto;
  constructor(repositorio: IRepositorioVoto) {
    this.repositorio = repositorio;
  }

  getQuantVotos(sala: Sala): number {
    return this.repositorio.getQuantVotos(sala);
  }

  getVotos(filme: Filme, sala: Sala): Voto[] {
    return this.repositorio.getVotos(filme, sala);
  }

  salvarVotos = (
    intencoesVoto: IntencaoVoto[],
    salaId: number,
    usuarioId: number
  ): Promise<boolean> => {
    const votos = intencoesVoto.map((intencao) =>
      Voto.build({
        filmeId: intencao.filmeId,
        querAssistir: intencao.querAssistir,
        usuarioId: usuarioId,
        salaId: salaId,
      })
    );
    console.log(votos);
    return this.repositorio.salvarVotos(votos);
  };
}

export default CadastroVoto;
