import { Response, Request } from "express";
import { container } from "tsyringe";

import { CadastroCategoriaUseCase } from "./CadastroCategoriaUseCase";

class CadastroCategoriaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao } = request.body;

    // Fazendo a injeção de dependencia
    const cadastroCategoriaUseCase = container.resolve(
      CadastroCategoriaUseCase
    );

    await cadastroCategoriaUseCase.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CadastroCategoriaController };
