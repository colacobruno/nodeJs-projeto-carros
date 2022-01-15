import { ICadastroUsuarioDTO } from "../dtos/ICadastroUsuarioDTO";

interface IUsuariosRepository {
  cadastrar(data: ICadastroUsuarioDTO): Promise<void>;
}

export { IUsuariosRepository };
