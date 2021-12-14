import { CategoriasRepository } from "../../../repository/implementacoes/CategoriasRepository";
import { ImportarCategoriaController } from "./ImportarCategoriaController";
import { ImportarCategoriaUseCase } from "./ImportarCategoriaUseCase";

const categoriasRepository = CategoriasRepository.getInstance();
const importarCategoriaUseCase = new ImportarCategoriaUseCase(
  categoriasRepository
);
const importarCategoriaController = new ImportarCategoriaController(
  importarCategoriaUseCase
);

export { ImportarCategoriaController };
