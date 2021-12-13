import { Especificacao } from "../models/Especificacao";

interface ICadastroEspecificacaoDTO {
  descricao: string;
  nome: string;
}

interface IEspecificacoesRepository {
  cadastrar({ nome, descricao }: ICadastroEspecificacaoDTO): void;
  listar(): Especificacao[];
  pesquisarPorNome(nome: string): Especificacao;
}

export { IEspecificacoesRepository, ICadastroEspecificacaoDTO };
