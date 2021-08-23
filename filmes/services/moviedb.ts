import axios from "axios";

class MovieDBService {
  static apiKey = "54d66cc4466b2beef50fb3957ba85be9";
  static fetchFilmes = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${MovieDBService.apiKey}`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  };
}

export default MovieDBService;
