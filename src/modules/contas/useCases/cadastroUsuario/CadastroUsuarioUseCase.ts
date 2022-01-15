import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { ICadastroUsuarioDTO } from "../../dtos/ICadastroUsuarioDTO";
import { IUsuariosRepository } from "../../repository/IUsuariosRepository";

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
