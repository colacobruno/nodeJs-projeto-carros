import { Response, Request } from "express";
import { container } from "tsyringe";

import { CadastroUsuarioUseCase } from "./CadastroUsuarioUseCase";

class CadastroUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, cnh, senha } = request.body;
    const cadastroUsuarioUseCase = container.resolve(CadastroUsuarioUseCase);

    await cadastroUsuarioUseCase.execute({
      nome,
      email,
      cnh,
      senha,
    });

    return response.status(201).send();
  }
}

export { CadastroUsuarioController };
