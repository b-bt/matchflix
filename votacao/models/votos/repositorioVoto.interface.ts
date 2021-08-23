import IntencaoVoto from "../../mensagens/intencaoVoto";
import Sala from "../salas/sala.model";
import Voto from "./voto.model";

interface IRepositorioVoto {
  getVotos(filmeId: string, sala: Sala): Voto[];
  getQuantVotos(sala: Sala): number;
  salvarVotos(
    votos: IntencaoVoto[],
    salaId: number,
    usuarioId: number
  ): Promise<boolean>;
}

export default IRepositorioVoto;
