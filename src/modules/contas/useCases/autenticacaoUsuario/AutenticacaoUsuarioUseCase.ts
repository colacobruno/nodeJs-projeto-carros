import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { IUsuariosRepository } from "@modules/contas/repository/IUsuariosRepository";

interface IRequest {
  email: string;
  senha: string;
}

interface IReponse {
  usuario: {
    nome: string;
    email: string;
  };
  token: string;
}

@injectable()
class AutenticacaoUsuarioUseCase {
  constructor(
    @inject("UsuariosRepository")
    private usuariosRepository: IUsuariosRepository
  ) {}

  async execute({ email, senha }: IRequest): Promise<IReponse> {
    const usuario = await this.usuariosRepository.procurarPorEmail(email);

    if (!usuario) {
      throw new AppError("Email ou senha incorreto !", 400);
    }

    const senhaOk = await compare(senha, usuario.senha);

    if (!senhaOk) {
      throw new AppError("Email ou senha incorreto !", 400);
    }

    const token = sign({}, "76b9340f85e4180d7f8dd7901a04641b", {
      subject: usuario.id,
      expiresIn: "1d",
    });

    const tokenRetorno: IReponse = {
      token,
      usuario: {
        nome: usuario.nome,
        email: usuario.email,
      },
    };

    return tokenRetorno;
  }
}

export { AutenticacaoUsuarioUseCase };
