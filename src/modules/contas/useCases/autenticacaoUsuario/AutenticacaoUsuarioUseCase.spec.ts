import { AppError } from "@errors/AppError";

import { ICadastroUsuarioDTO } from "../../dtos/ICadastroUsuarioDTO";
import { UsuarioRepositoryInMemory } from "../../repository/in-memory/UsuarioRepositoryInMemory";
import { CadastroUsuarioUseCase } from "../cadastroUsuario/CadastroUsuarioUseCase";
import { AutenticacaoUsuarioUseCase } from "./AutenticacaoUsuarioUseCase";

let autenticacaoUsuarioUseCase: AutenticacaoUsuarioUseCase;
let usuarioRepositoryInMemory: UsuarioRepositoryInMemory;
let cadastroUsuarioUseCase: CadastroUsuarioUseCase;

describe("Usuário autenticado", () => {
  beforeEach(() => {
    usuarioRepositoryInMemory = new UsuarioRepositoryInMemory();
    autenticacaoUsuarioUseCase = new AutenticacaoUsuarioUseCase(
      usuarioRepositoryInMemory
    );
    cadastroUsuarioUseCase = new CadastroUsuarioUseCase(
      usuarioRepositoryInMemory
    );
  });

  it("Deve ser possível autenticar um usuário", async () => {
    const usuario: ICadastroUsuarioDTO = {
      cnh: "123",
      email: "usuario@teste.com.br",
      senha: "1234",
      nome: "Usuario de teste",
    };

    await cadastroUsuarioUseCase.execute(usuario);

    const resultado = await autenticacaoUsuarioUseCase.execute({
      email: usuario.email,
      senha: usuario.senha,
    });
    expect(resultado).toHaveProperty("token");
  });

  it("Não deve ser possível autenticar um usuário que não existe", () => {
    expect(async () => {
      await autenticacaoUsuarioUseCase.execute({
        email: "errro@email.com",
        senha: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Não deve ser possível autenticar um usuário com senha errada", () => {
    expect(async () => {
      const usuario: ICadastroUsuarioDTO = {
        cnh: "123",
        email: "usuario@teste.com.br",
        senha: "1234",
        nome: "Usuario de teste",
      };

      await cadastroUsuarioUseCase.execute(usuario);

      await autenticacaoUsuarioUseCase.execute({
        email: usuario.email,
        senha: "12345",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
