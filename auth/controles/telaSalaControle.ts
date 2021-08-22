import Fachada from "../fachada/fachada";
import IntencaoVoto from "../mensagens/intencaoVoto";
import Filme from "../models/filmes/filme.model";
import Sala from "../models/salas/sala.model";
import Voto from "../models/votos/voto.model";
import { Request, Response } from "express";

class TelaSalaControle {
  votos: Voto[] = [];
  fachada: Fachada;

  constructor(fachada: Fachada) {
    this.fachada = fachada;
  }

  getSala = async (req: Request, res: Response) => {
    const salaId = parseInt(req.params.idSala);

    try {
      const filmes = await this.carregarFilmes(salaId);
      res.render("vote", { filmes: filmes });
    } catch (error) {
      res.send(error);
    }
  };

  postSala = async (req: Request, res: Response) => {
    const salaId = parseInt(req.params.idSala);
    const votos: IntencaoVoto[] = req.body;

    try {
      const status = await this.enviarVotos(votos, salaId);
      res.send("OK");
    } catch (error) {
      res.send(error);
    }
  };

  carregarFilmes = async (salaId: number): Promise<Filme[]> => {
    return this.fachada.pegarFilmes(salaId);
  };

  enviarVotos = async (
    intencoesVoto: IntencaoVoto[],
    salaId: number
  ): Promise<boolean> => {
    return this.fachada.enviarVotos(intencoesVoto, salaId);
  };
  compartilharSala() {}
}

export default TelaSalaControle;
