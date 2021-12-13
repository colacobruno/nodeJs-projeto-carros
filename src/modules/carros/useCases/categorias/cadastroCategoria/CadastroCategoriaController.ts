import { Response, Request } from "express";

import { CadastroCategoriaUseCase } from "./CadastroCategoriaUseCase";

class CadastroCategoriaController {
  constructor(private cadastroCategoriaUseCase: CadastroCategoriaUseCase) {}

  handle(request: Request, response: Response): Response {
    const { nome, descricao } = request.body;

    this.cadastroCategoriaUseCase.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CadastroCategoriaController };
