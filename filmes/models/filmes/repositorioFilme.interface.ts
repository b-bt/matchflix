import Filme from "./filme.model";

interface IRepositorioFilme {
  getFilmes(filmesIds: number[]): Promise<Filme[]>;
  addFilmes(
    filmes: { id: string; titulo: string; descricao: string; ano: number }[]
  ): Promise<Filme[]>;
}

export default IRepositorioFilme;
