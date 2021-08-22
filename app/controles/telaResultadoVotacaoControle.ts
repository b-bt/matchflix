import Fachada from "../fachada/fachada";
import ResultadoVotosFilme from "../mensagens/resultadoVotosFilme";
import Sala from "../models/salas/sala.model";
import { Request, Response } from "express";

class TelaResultadoVotacaoControle {
  fachada: Fachada;

  constructor(fachada: Fachada) {
    this.fachada = fachada;
  }

  getResultadoVotacao = async (req: Request, res: Response) => {
    const salaId = parseInt(req.params.idSala);

    try {
      const resultados = await this.visualizarResultado(salaId);
      res.render("results", { resultados: resultados });
    } catch (error) {
      res.send("error");
    }
  };

  verificarVotacaoAcabou = (sala: Sala): boolean => {
    return this.fachada.verificarVotacaoAcabou(sala);
  };

  visualizarResultado = async (
    salaId: number
  ): Promise<ResultadoVotosFilme[]> => {
    return this.fachada.calcularResultado(salaId);
  };
}

export default TelaResultadoVotacaoControle;
