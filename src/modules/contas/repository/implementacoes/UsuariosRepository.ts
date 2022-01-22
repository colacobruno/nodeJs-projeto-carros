import { getRepository, Repository } from "typeorm";

import { ICadastroUsuarioDTO } from "../../dtos/ICadastroUsuarioDTO";
import { Usuario } from "../../entities/Usuario";
import { IUsuariosRepository } from "../IUsuariosRepository";

class UsuariosRepository implements IUsuariosRepository {
  private repository: Repository<Usuario>;

  constructor() {
    this.repository = getRepository(Usuario);
  }

  async cadastrar({
    nome,
    email,
    cnh,
    senha,
  }: ICadastroUsuarioDTO): Promise<void> {
    const usuario = this.repository.create({
      nome,
      email,
      cnh,
      senha,
    });

    await this.repository.save(usuario);
  }

  async procurarPorEmail(email: string): Promise<Usuario> {
    const usuario = await this.repository.findOne({ email });
    return usuario;
  }

  async procurarPorId(id: string): Promise<Usuario> {
    const usuario = await this.repository.findOne({ id });
    return usuario;
  }
}

export { UsuariosRepository };
