import { inject, injectable } from "tsyringe";

import { IUsuariosRepository } from "@modules/contas/repository/IUsuariosRepository";
import { deleteFile } from "@utils/file";

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

    if (usuario.avatar) {
      await deleteFile(`./tmp/avatar/${usuario.avatar}`); // coloca o endereço da pasta e concatena com o nome
    }
    usuario.avatar = avatar_file;

    await this.usuariosRepository.cadastrar(usuario);
  }
}

export { AtualizaAvatarUsuarioUseCase };
