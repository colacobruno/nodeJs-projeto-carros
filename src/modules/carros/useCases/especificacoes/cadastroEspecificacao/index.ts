import { EspecificacoesRepository } from "../../../repository/implementacoes/EspecificacoesRepository";
import { CadastroEspecificacaoController } from "./CadastroEspecificacaoController";
import { CadastroEspecificacaoUseCase } from "./CadastroEspecificacaoUseCase";

const especificacaoRepository = EspecificacoesRepository.getInstance();
const cadastroEspecificacaoUSeCase = new CadastroEspecificacaoUseCase(
  especificacaoRepository
);
const cadastroEspecificacaoController = new CadastroEspecificacaoController(
  cadastroEspecificacaoUSeCase
);

export { cadastroEspecificacaoController };
