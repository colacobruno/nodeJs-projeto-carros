import { Response, Request } from "express";

import { ImportarCategoriaUseCase } from "./ImportarCategoriaUseCase";

class ImportarCategoriaController {
  constructor(private importarCategoriaUseCase: ImportarCategoriaUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importarCategoriaUseCase.execute(file);

    return response.send();
  }
}

export { ImportarCategoriaController };
