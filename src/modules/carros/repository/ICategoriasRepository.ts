import { Categoria } from "../entities/Categoria";

interface ICadastroCategoriaDTO {
  nome: string;
  descricao: string;
}

interface ICategoriasRepository {
  pesquisarPorNome(nome: string): Promise<Categoria>;
  listar(): Promise<Categoria[]>;
  cadastrar({ nome, descricao }: ICadastroCategoriaDTO): Promise<void>;
}

export { ICategoriasRepository, ICadastroCategoriaDTO };
