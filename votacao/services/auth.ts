import axios from "axios";

class AuthService {
  static validarUsuario = async (
    token: string
  ): Promise<Record<string, any>> => {
    try {
      const res = await axios.get(`http://auth-service:8100/check`, {
        headers: { token: token },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  };
}

export default AuthService;
