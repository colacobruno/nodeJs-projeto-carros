import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListarCategoriasUseCase } from "./ListarCategoriasUseCase";

class ListarCategoriasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listarCategoriasUseCase = container.resolve(ListarCategoriasUseCase);

    const todas = await listarCategoriasUseCase.execute();

    return response.json(todas);
  }
}

export { ListarCategoriasController };
