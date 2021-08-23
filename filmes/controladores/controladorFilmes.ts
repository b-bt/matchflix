import Gerenciador from "../manager/gerenciador";
import { Request, Response } from "express";
import IRepositorioFilme from "../models/filmes/repositorioFilme.interface";
import MovieDBService from "../services/moviedb";

class ControladorFilmes {
  repositorioFilme: IRepositorioFilme;

  constructor(gerenciador: Gerenciador) {
    this.repositorioFilme = gerenciador.repositorioFilme;
  }

  pegarFilmes = async (req: Request, res: Response) => {
    const data = (await MovieDBService.fetchFilmes()).results as Record<
      string,
      any
    >[];

    const filmesData = data.map((filme) => ({
      id: filme.id,
      titulo: filme.title,
      descricao: filme.overview,
      ano: new Date(filme.release_date).getFullYear(),
    }));

    const filmes = await this.repositorioFilme.addFilmes(filmesData);

    res.json(
      filmes.map((filme) => ({
        id: filme.id,
        titulo: filme.titulo,
        descricao: filme.descricao,
        ano: filme.ano,
      }))
    );
  };

  pegarFilmesPorIds = async (req: Request, res: Response) => {
    console.log(req.query);
    if (!req.query.ids) {
      throw new Error("Parametros invalidos");
    }
    const ids = req.query.ids
      .toString()
      .split(",")
      .map((id) => parseInt(id));
    const filmes = await this.repositorioFilme.getFilmes(ids);

    res.json(
      filmes.map((filme) => ({
        id: filme.id,
        titulo: filme.titulo,
        descricao: filme.descricao,
        ano: filme.ano,
      }))
    );
  };
}

export default ControladorFilmes;
