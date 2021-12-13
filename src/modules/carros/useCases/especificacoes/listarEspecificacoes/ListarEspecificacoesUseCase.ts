import { Especificacao } from "../../../models/Especificacao";
import { IEspecificacoesRepository } from "../../../repository/IEspecificacoesRepositry";

class ListarEspecificacoesUseCase {
  constructor(private especificacaoRepository: IEspecificacoesRepository) {}

  execute(): Especificacao[] {
    const especificacoes = this.especificacaoRepository.listar();

    return especificacoes;
  }
}
export { ListarEspecificacoesUseCase };
