import axios from "axios";

const TOKEN_KEY = "@matchflix-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = async (email: string, senha:string) => {
  const res = await axios.post(`http://localhost:8084/login`, {email: email, senha: senha})
  localStorage.setItem(TOKEN_KEY, res.data.token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
