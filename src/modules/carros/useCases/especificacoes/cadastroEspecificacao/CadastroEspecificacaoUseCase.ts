import { IEspecificacoesRepository } from "../../../repository/IEspecificacoesRepositry";

interface IRequest {
  nome: string;
  descricao: string;
}

class CadastroEspecificacaoUseCase {
  constructor(private especificacaoRepository: IEspecificacoesRepository) {}
  execute({ nome, descricao }: IRequest): void {
    const existeEspecificacao =
      this.especificacaoRepository.pesquisarPorNome(nome);

    if (existeEspecificacao) {
      throw new Error("Essa especificação já existe !");
    }

    this.especificacaoRepository.cadastrar({ nome, descricao });
  }
}

export { CadastroEspecificacaoUseCase };
