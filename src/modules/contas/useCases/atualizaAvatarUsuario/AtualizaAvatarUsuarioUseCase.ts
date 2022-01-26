import { inject, injectable } from "tsyringe";
import { IUsuariosRepository } from "../../repository/IUsuariosRepository";

interface IRequest {
  usuario_id: string;
  avatar_file: string;
}

@injectable()
class AtualizaAvatarUsuarioUseCase {
  constructor(
    @inject("UsuariosRepository")
    private usuariosRepository: IUsuariosRepository
  ) {}

  async execute({ usuario_id, avatar_file }: IRequest): Promise<void> {
    const usuario = await this.usuariosRepository.procurarPorId(usuario_id);

    usuario.avatar = avatar_file;

    await this.usuariosRepository.cadastrar(usuario);
  }
}

export { AtualizaAvatarUsuarioUseCase };
