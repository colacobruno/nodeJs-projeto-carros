import { Request, Response } from "express";
import { container } from "tsyringe";

import { AutenticacaoUsuarioUseCase } from "./AutenticacaoUsuarioUseCase";

class AutenticacaoUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { senha, email } = request.body;

    const autenticacaoUsuarioUseCase = container.resolve(
      AutenticacaoUsuarioUseCase
    );

    const token = await autenticacaoUsuarioUseCase.execute({
      senha,
      email,
    });

    return response.json(token);
  }
}

export { AutenticacaoUsuarioController };
