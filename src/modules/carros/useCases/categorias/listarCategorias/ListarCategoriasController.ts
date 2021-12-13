import { Request, Response } from "express";

import { ListarCategoriasUseCase } from "./ListarCategoriasUseCase";

class ListarCategoriasController {
  constructor(private listarCategoriasUseCase: ListarCategoriasUseCase) {}
  handle(request: Request, response: Response): Response {
    const todas = this.listarCategoriasUseCase.execute();

    return response.json(todas);
  }
}

export { ListarCategoriasController };
