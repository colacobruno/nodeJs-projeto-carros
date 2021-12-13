import { EspecificacoesRepository } from "../../../repository/implementacoes/EspecificacoesRepository";
import { ListarEspecificacoesController } from "./ListarEspecificacoesController";
import { ListarEspecificacoesUseCase } from "./ListarEspecificacoesUseCase";

const especificacoesRepository = EspecificacoesRepository.getInstance();
const listarEspecificacoesUseCase = new ListarEspecificacoesUseCase(
  especificacoesRepository
);
const listarEspecificacoesController = new ListarEspecificacoesController(
  listarEspecificacoesUseCase
);

export { listarEspecificacoesController };
