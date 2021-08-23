import { Request, Response } from "express";
import Gerenciador from "../manager/gerenciador";
import ResultadoVotosFilme from "../mensagens/resultadoVotosFilme";
import IRepositorioSala from "../models/salas/repositorioSala.interface";
import Sala from "../models/salas/sala.model";
import IRepositorioVoto from "../models/votos/repositorioVoto.interface";
import Voto from "../models/votos/voto.model";
import FilmesService from "../services/filmes";

class ControladorResultadoVotacao {
  repositorioVoto: IRepositorioVoto;
  repositorioSala: IRepositorioSala;

  constructor(gerenciador: Gerenciador) {
    this.repositorioVoto = gerenciador.repositorioVoto;
    this.repositorioSala = gerenciador.repositorioSala;
  }

  getResultadoVotacao = async (req: Request, res: Response) => {
    const salaId = parseInt(req.params.idSala);

    try {
      const resultados = await this.visualizarResultado(salaId);
      res.json(resultados);
    } catch (error) {
      console.log(error);
      res.status(400).send("error");
    }
  };

  visualizarResultado = async (
    salaId: number
  ): Promise<ResultadoVotosFilme[]> => {
    return this.calcularResultado(salaId);
  };

  calcularResultado = async (
    salaId: number
  ): Promise<ResultadoVotosFilme[]> => {
    const sala = await this.repositorioSala.getSala(salaId);
    const filmesIds = sala.getFilmesIds().map((id) => parseInt(id));
    const filmes = await FilmesService.fetchFilmesPorIds(filmesIds);
    const votos = sala.votos;

    const resultados = votos.reduce((acc, voto) => {
      const filme = filmes.find((filme) => parseInt(filme.id) === voto.filmeId);
      if (!filme) {
        throw new Error("Filme invalido");
      }

      if (voto.querAssistir) {
        const resultadoFilme = acc.find(
          (resultado) => resultado.filme.id === voto.filmeId
        );

        if (resultadoFilme == null) {
          acc.push(new ResultadoVotosFilme(filme, 1));
        } else {
          resultadoFilme.votos++;
        }
      }
      return acc;
    }, new Array<ResultadoVotosFilme>());
    return resultados.sort((r1, r2) => r2.votos - r1.votos);
  };

  // verificarVotacaoAcabou = (sala: Sala): boolean => {
  //   const qtdVotos = this.cadastroVoto.getQuantVotos(sala);
  //   const numMaxVotos = sala.participantes * sala.filmes.length;
  //   return qtdVotos >= numMaxVotos;
  // };
}

export default ControladorResultadoVotacao;
