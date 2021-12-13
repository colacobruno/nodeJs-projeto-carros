import { Request, Response } from "express";

import { CadastroEspecificacaoUseCase } from "./CadastroEspecificacaoUseCase";

class CadastroEspecificacaoController {
  constructor(
    private cadastroEspecificacaoUseCase: CadastroEspecificacaoUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { nome, descricao } = request.body;

    this.cadastroEspecificacaoUseCase.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CadastroEspecificacaoController };
