import { Request, Response } from "express";
import { container } from "tsyringe";

import { CadastroEspecificacaoUseCase } from "./CadastroEspecificacaoUseCase";

class CadastroEspecificacaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao } = request.body;

    const cadastroEspecificacaoUseCase = container.resolve(
      CadastroEspecificacaoUseCase
    );

    await cadastroEspecificacaoUseCase.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CadastroEspecificacaoController };
