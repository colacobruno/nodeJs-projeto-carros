import { CategoriasRepository } from "../../../repository/implementacoes/CategoriasRepository";
import { ListarCategoriasController } from "./ListarCategoriasController";
import { ListarCategoriasUseCase } from "./ListarCategoriasUseCase";

const categoriasRepository = null;
const listarCategoriasUseCase = new ListarCategoriasUseCase(
  categoriasRepository
);
const listarCategoriasController = new ListarCategoriasController(
  listarCategoriasUseCase
);

export { listarCategoriasController };
