import axios from "axios";
import qs from "qs";

class FilmesService {
  static fetchFilmes = async (): Promise<Record<string, any>[]> => {
    try {
      const res = await axios.get(`http://filmes-service:8100/filmes`);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  static fetchFilmesPorIds = async (
    ids: number[]
  ): Promise<Record<string, any>[]> => {
    try {
      const res = await axios.get(`http://filmes-service:8100/filmesPorIds`, {
        params: {
          ids: ids,
        },
        paramsSerializer: (params) => qs.stringify(params),
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  };
}

export default FilmesService;
