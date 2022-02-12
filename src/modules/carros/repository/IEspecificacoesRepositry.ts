import { Especificacao } from "../infra/typeorm/entities/Especificacao";

interface ICadastroEspecificacaoDTO {
  descricao: string;
  nome: string;
}

interface IEspecificacoesRepository {
  pesquisarPorNome(nome: string): Promise<Especificacao>;
  listar(): Promise<Especificacao[]>;
  cadastrar({ nome, descricao }: ICadastroEspecificacaoDTO): Promise<void>;
}

export { IEspecificacoesRepository, ICadastroEspecificacaoDTO };
