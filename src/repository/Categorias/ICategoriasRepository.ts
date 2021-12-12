import { Categoria } from "../models/Categoria";

interface ICadastroCategoriaDTO {
  nome: string;
  descricao: string;
}

interface ICategoriasRepository {
  pesquisarPorNome(nome: string): Categoria;
  listar(): Categoria[];
  cadastrar({ nome, descricao }: ICadastroCategoriaDTO): void;
}

export { ICategoriasRepository, ICadastroCategoriaDTO };
