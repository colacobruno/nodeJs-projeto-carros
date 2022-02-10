import { ICadastroUsuarioDTO } from "../../dtos/ICadastroUsuarioDTO";
import { Usuario } from "../../entities/Usuario";
import { IUsuariosRepository } from "../IUsuariosRepository";

class UsuarioRepositoryInMemory implements IUsuariosRepository {
  usuarios: Usuario[] = [];

  async cadastrar({
    cnh,
    email,
    nome,
    senha,
  }: ICadastroUsuarioDTO): Promise<void> {
    const usuario = new Usuario();

    Object.assign(usuario, {
      cnh,
      email,
      nome,
      senha,
    });

    this.usuarios.push(usuario);
  }

  async procurarPorEmail(email: string): Promise<Usuario> {
    return this.usuarios.find((usuario) => usuario.email === email);
  }

  async procurarPorId(id: string): Promise<Usuario> {
    return this.usuarios.find((usuario) => usuario.id === id);
  }
}

export { UsuarioRepositoryInMemory };
