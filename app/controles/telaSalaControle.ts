import Fachada from "../fachada/fachada";
import Filme from "../models/filmes/filme.model";
import Sala from "../models/salas/sala.model";
import Voto from "../models/votos/voto.model";

class TelaSalaControle {
  votos: Voto[] = [];
  sala: Sala;
  fachada: Fachada;

  constructor(sala: number, fachada) {
    const repositorioSala = Gerenciador.instancia.repositorioSala;
    const cadastroSala = new CadastroSala(repositorioSala);
    this.sala = cadastroSala.getSala(sala);
    this.fachada = Gerenciador.instancia.fachada;
  }

  carregarFilmes(salaId: number): Filme[] {
    return this.fachada.pegarFilmes(salaId);
  }

  votar(querAssistir: boolean, filme: Filme) {}
  compartilharSala() {}
}

export default TelaSalaControle;
