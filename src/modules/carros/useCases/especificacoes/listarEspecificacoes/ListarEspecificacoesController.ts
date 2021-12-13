import { Request, Response } from "express";

import { ListarEspecificacoesUseCase } from "./ListarEspecificacoesUseCase";

class ListarEspecificacoesController {
  constructor(
    private listarEspecificacoesUseCase: ListarEspecificacoesUseCase
  ) {}
  handle(request: Request, response: Response): Response {
    const todas = this.listarEspecificacoesUseCase.execute();

    return response.json(todas);
  }
}
export { ListarEspecificacoesController };
