import { Response, Request } from "express";
import { container } from "tsyringe";

import { ImportarCategoriaUseCase } from "./ImportarCategoriaUseCase";

class ImportarCategoriaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importarCategoriaUseCase = container.resolve(
      ImportarCategoriaUseCase
    );

    await importarCategoriaUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportarCategoriaController };
