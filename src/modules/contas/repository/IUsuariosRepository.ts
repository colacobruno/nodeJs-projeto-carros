import { ICadastroUsuarioDTO } from "../dtos/ICadastroUsuarioDTO";
import { Usuario } from "../infra/typeorm/entities/Usuario";

interface IUsuariosRepository {
  cadastrar(data: ICadastroUsuarioDTO): Promise<void>;
  procurarPorEmail(email: string): Promise<Usuario>;
  procurarPorId(id: string): Promise<Usuario>;
}

export { IUsuariosRepository };
