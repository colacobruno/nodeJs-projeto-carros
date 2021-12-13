import { ImportarCategoriaController } from "./ImportarCategoriaController";
import { ImportarCategoriaUseCase } from "./ImportarCategoriaUseCase";

const importarCategoriaUseCase = new ImportarCategoriaUseCase();
const importarCategoriaController = new ImportarCategoriaController(
  importarCategoriaUseCase
);

export { ImportarCategoriaController };
