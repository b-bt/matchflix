import Gerenciador from "../manager/gerenciador";
import CadastroFilme from "../models/filmes/cadastroFilme";
import CadastroVoto from "../models/votos/cadastroVoto";
import Filme from "../models/filmes/filme.model";
import Voto from "../models/votos/voto.model";
import CadastroSala from "../models/salas/cadastroSala";
import IntencaoVoto from "../mensagens/intencaoVoto";

class ControladorSala {
  cadastroSala: CadastroSala;
  cadastroFilmes: CadastroFilme;
  cadastroVotos: CadastroVoto;

  constructor(gerenciador: Gerenciador) {
    const repositorioFilme = gerenciador.repositorioFilme;
    const repositorioVoto = gerenciador.repositorioVoto;
    const repositorioSala = gerenciador.repositorioSala;
    this.cadastroSala = new CadastroSala(repositorioSala);
    this.cadastroFilmes = new CadastroFilme(repositorioFilme);
    this.cadastroVotos = new CadastroVoto(repositorioVoto);
  }

  pegarFilmes = async (salaId: number): Promise<Filme[]> => {
    const sala = await this.cadastroSala.getSala(salaId);
    return sala.filmes;
  };

  enviarVotos = (votos: IntencaoVoto[], salaId: number): Promise<boolean> => {
    return this.cadastroVotos.salvarVotos(votos, salaId, 1);
  };
}

export default ControladorSala;
