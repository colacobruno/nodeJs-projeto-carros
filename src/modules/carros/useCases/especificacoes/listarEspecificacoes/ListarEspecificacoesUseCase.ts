import { inject, injectable } from "tsyringe";

import { Especificacao } from "@modules/carros/infra/typeorm/entities/Especificacao";
import { IEspecificacoesRepository } from "@modules/carros/repository/IEspecificacoesRepositry";

@injectable()
class ListarEspecificacoesUseCase {
  constructor(
    @inject("EspecificacoesRepository")
    private especificacaoRepository: IEspecificacoesRepository
  ) {}

  async execute(): Promise<Especificacao[]> {
    const especificacoes = await this.especificacaoRepository.listar();

    return especificacoes;
  }
}
export { ListarEspecificacoesUseCase };
