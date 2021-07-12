import Gerenciador from "../manager/gerenciador";
import CadastroFilme from "../models/filmes/cadastroFilme";
import CadastroVoto from "../models/votos/cadastroVoto";
import Filme from "../models/filmes/filme.model";
import Voto from "../models/votos/voto.model";
import CadastroSala from "../models/salas/cadastroSala";

class ControladorSala {
  cadastroSala: CadastroSala;
  cadastroFilmes: CadastroFilme;
  cadastroVotos: CadastroVoto;

  constructor(gerenciador: Gerenciador) {
    const repositorioFilme = gerenciador.repositorioFilme;
    const repositorioVoto = gerenciador.repositorioVoto;
    this.cadastroFilmes = new CadastroFilme(repositorioFilme);
    this.cadastroVotos = new CadastroVoto(repositorioVoto);
  }

  pegarFilmes = (salaId: number): Filme[] => {
    const sala = this.cadastroSala.getSala(salaId);
    return this.cadastroFilmes.getFilmesDaSala(sala);
  };

  enviarVotos = (votos: Voto[]): void => {
    this.cadastroVotos.salvarVotos(votos);
  };
}

export default ControladorSala;
