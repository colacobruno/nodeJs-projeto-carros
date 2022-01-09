import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListarEspecificacoesUseCase } from "./ListarEspecificacoesUseCase";

class ListarEspecificacoesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listarEspecificacoesUseCase = container.resolve(
      ListarEspecificacoesUseCase
    );
    const todas = await listarEspecificacoesUseCase.execute();

    return response.json(todas);
  }
}
export { ListarEspecificacoesController };
