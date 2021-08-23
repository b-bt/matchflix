import { Request, Response } from "express";
import Gerenciador from "../manager/gerenciador";
import Voto from "../models/votos/voto.model";
import IntencaoVoto from "../mensagens/intencaoVoto";
import IRepositorioVoto from "../models/votos/repositorioVoto.interface";
import IRepositorioSala from "../models/salas/repositorioSala.interface";
import AuthService from "../services/auth";
import FilmesService from "../services/filmes";

class ControladorSala {
  repositorioVoto: IRepositorioVoto;
  repositorioSala: IRepositorioSala;

  constructor(gerenciador: Gerenciador) {
    this.repositorioVoto = gerenciador.repositorioVoto;
    this.repositorioSala = gerenciador.repositorioSala;
  }

  getSala = async (req: Request, res: Response) => {
    const token = req.headers.token?.toString() || "";
    const salaId = parseInt(req.params.idSala);

    const userData = await AuthService.validarUsuario(token);

    const sala = await this.repositorioSala.getSala(salaId);
    const filmesIds = sala.getFilmesIds().map((id) => parseInt(id));
    const filmes = await FilmesService.fetchFilmesPorIds(filmesIds);

    res.json({
      id: sala.id,
      qtdParticipantes: sala.participantes,
      filmes: filmes,
    });
  };

  criarSala = async (req: Request, res: Response) => {
    const token = req.headers.token?.toString() || "";
    const qtdParticipantes: number = req.body.qtdParticipantes;
    const userData = await AuthService.validarUsuario(token);
    const filmes = await FilmesService.fetchFilmes();

    const sala = await this.repositorioSala.addSala(qtdParticipantes, filmes);

    res.json({
      id: sala.id,
      qtdParticipantes: sala.participantes,
      filmes: filmes,
    });
  };

  addVotos = async (req: Request, res: Response) => {
    const token = req.headers.token?.toString() || "";
    const salaId = parseInt(req.params.idSala);

    const userData = await AuthService.validarUsuario(token);
    const intencoesVoto: IntencaoVoto[] = req.body;

    try {
      await this.repositorioVoto.salvarVotos(
        intencoesVoto,
        salaId,
        userData.id
      );
      res.send("OK");
    } catch (error) {
      res.send(error);
    }
  };
}

export default ControladorSala;
