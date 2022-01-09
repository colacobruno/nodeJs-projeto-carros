import { Especificacao } from "../../entities/Especificacao";
import {
  ICadastroEspecificacaoDTO,
  IEspecificacoesRepository,
} from "../IEspecificacoesRepositry";

class EspecificacoesRepository implements IEspecificacoesRepository {
  private especificacoes: Especificacao[];

  private static INSTANCE: EspecificacoesRepository;

  public static getInstance(): EspecificacoesRepository {
    if (!EspecificacoesRepository.INSTANCE) {
      EspecificacoesRepository.INSTANCE = new EspecificacoesRepository();
    }
    return EspecificacoesRepository.INSTANCE;
  }

  private constructor() {
    this.especificacoes = [];
  }

  cadastrar({ nome, descricao }: ICadastroEspecificacaoDTO): void {
    const especificacao = new Especificacao();
    Object.assign(especificacao, {
      nome,
      descricao,
      criado_em: new Date(),
    });
    this.especificacoes.push(especificacao);
  }

  listar(): Especificacao[] {
    return this.especificacoes;
  }

  pesquisarPorNome(nome: string): Especificacao {
    const especificacao = this.especificacoes.find(
      (especificacao) => especificacao.nome === nome
    );
    return especificacao;
  }
}

export { EspecificacoesRepository };
