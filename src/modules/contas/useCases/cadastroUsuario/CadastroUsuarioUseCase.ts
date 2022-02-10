import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ICadastroUsuarioDTO } from "@modules/contas/dtos/ICadastroUsuarioDTO";
import { IUsuariosRepository } from "@modules/contas/repository/IUsuariosRepository";

@injectable()
class CadastroUsuarioUseCase {
  constructor(
    @inject("UsuariosRepository")
    private usuariosRepository: IUsuariosRepository
  ) {}

  async execute({
    nome,
    email,
    cnh,
    senha,
  }: ICadastroUsuarioDTO): Promise<void> {
    const usuarioExistente = await this.usuariosRepository.procurarPorEmail(
      email
    );

    if (usuarioExistente) {
      throw new AppError("Usuário já existe !", 400);
    }

    const senhaHash = await hash(senha, 8);

    await this.usuariosRepository.cadastrar({
      nome,
      email,
      senha: senhaHash,
      cnh,
    });
  }
}

export { CadastroUsuarioUseCase };
