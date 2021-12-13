import { CategoriasRepository } from "../../../repository/implementacoes/CategoriasRepository";
import { CadastroCategoriaController } from "./CadastroCategoriaController";
import { CadastroCategoriaUseCase } from "./CadastroCategoriaUseCase";

const categoriasRepository = CategoriasRepository.getInstance();

const cadastroCategoriaUseCase = new CadastroCategoriaUseCase(
  categoriasRepository
);

const cadastroCategoriaController = new CadastroCategoriaController(
  cadastroCategoriaUseCase
);

export { cadastroCategoriaController };
