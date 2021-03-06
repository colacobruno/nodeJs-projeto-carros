import { inject, injectable } from "tsyringe";

import { IEspecificacoesRepository } from "@modules/carros/repository/IEspecificacoesRepositry";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  nome: string;
  descricao: string;
}

@injectable()
class CadastroEspecificacaoUseCase {
  constructor(
    @inject("EspecificacoesRepository")
    private especificacaoRepository: IEspecificacoesRepository
  ) {}

  async execute({ nome, descricao }: IRequest): Promise<void> {
    const existeEspecificacao =
      await this.especificacaoRepository.pesquisarPorNome(nome);

    if (existeEspecificacao) {
      throw new AppError("Essa especificação já existe !", 400);
    }

    await this.especificacaoRepository.cadastrar({ nome, descricao });
  }
}

export { CadastroEspecificacaoUseCase };
