import Filme from "./filme.model";

interface IRepositorioFilme {
  getFilmes(filmes: Record<string, any>[]): Promise<Filme[]>;
  addFilmes(
    filmes: { id: string; titulo: string; descricao: string; ano: number }[]
  ): Promise<Filme[]>;
}

export default IRepositorioFilme;
