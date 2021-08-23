import { Request, Response } from "express";
import AuthService from "../services/auth";
import VotacaoService from "../services/votacao";

class ControladorGateway {
  login = async (req: Request, res: Response) => {
    const email: string = req.body.email;
    const senha: string = req.body.senha;

    const userData = await AuthService.login(email, senha);

    res.json(userData);
  };

  criarSala = async (req: Request, res: Response) => {
    const qtdParticipantes: number = req.body.qtdParticipantes;
    const token: string = req.headers.token?.toString() || "";

    const data = await VotacaoService.criarSala(qtdParticipantes, token);

    res.json(data);
  };

  getSala = async (req: Request, res: Response) => {
    const salaId: number = parseInt(req.params.salaId);
    const token: string = req.headers.token?.toString() || "";

    const data = await VotacaoService.getSala(salaId, token);

    res.json(data);
  };

  addVotos = async (req: Request, res: Response) => {
    const salaId: number = parseInt(req.params.salaId);
    const token: string = req.headers.token?.toString() || "";
    const intencoesVoto: Record<string, any>[] = req.body;

    const data = await VotacaoService.addVotos(salaId, intencoesVoto, token);

    res.json(data);
  };

  getResultadoVotacao = async (req: Request, res: Response) => {
    const salaId: number = parseInt(req.params.salaId);
    const token: string = req.headers.token?.toString() || "";

    const data = await VotacaoService.getResultadoVotacao(salaId, token);

    res.json(data);
  };
}

export default ControladorGateway;
