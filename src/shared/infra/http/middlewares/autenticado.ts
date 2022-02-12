import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsuariosRepository } from "@modules/contas/infra/typeorm/repository/UsuariosRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function autenticado(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token inválido !", 401);
  }

  // sempre vem como Bearer numero_do_token
  // [0] = Bearer
  // [1] = numero_do_token
  const [, token] = authHeader.split(" ");

  // usar o verify para comparar o token recebido com a chave secreta usada para criar o token
  // se der sucesso vai embora, se der erro lança exceção
  // por isso usa o try-catch
  try {
    const { sub: usuario_id } = verify(
      token,
      "76b9340f85e4180d7f8dd7901a04641b"
    ) as IPayload; // forçando o retorno do verify ser a interface para pegar o sub que é o ID

    const usuarioRepository = new UsuariosRepository();
    const usuario = usuarioRepository.procurarPorId(usuario_id);

    if (!usuario) {
      throw new AppError("Usuário não existe !", 401);
    }

    request.usuario = {
      id: usuario_id,
    };

    next();
  } catch {
    throw new AppError("Token inválido !", 401);
  }
}
