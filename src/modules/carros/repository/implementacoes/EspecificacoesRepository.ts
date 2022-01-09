import { getRepository, Repository } from "typeorm";

import { Especificacao } from "../../entities/Especificacao";
import {
  ICadastroEspecificacaoDTO,
  IEspecificacoesRepository,
} from "../IEspecificacoesRepositry";

class EspecificacoesRepository implements IEspecificacoesRepository {
  private repository: Repository<Especificacao>;

  constructor() {
    this.repository = getRepository(Especificacao);
  }

  async cadastrar({
    nome,
    descricao,
  }: ICadastroEspecificacaoDTO): Promise<void> {
    const especificacao = this.repository.create({
      descricao,
      nome,
    });

    await this.repository.save(especificacao);
  }

  async listar(): Promise<Especificacao[]> {
    const especificacao = await this.repository.find();
    return especificacao;
  }

  async pesquisarPorNome(nome: string): Promise<Especificacao> {
    const especificacao = this.repository.findOne({ nome });
    return especificacao;
  }
}

export { EspecificacoesRepository };
