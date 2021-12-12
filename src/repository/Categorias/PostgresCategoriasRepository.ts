import { Categoria } from "../models/Categoria";
import {
  ICadastroCategoriaDTO,
  ICategoriasRepository,
} from "./ICategoriasRepository";

class PostgresCategoriasRepository implements ICategoriasRepository {
  pesquisarPorNome(nome: string): Categoria {
    console.log(nome);
    return null;
  }
  listar(): Categoria[] {
    return null;
  }
  cadastrar({ nome, descricao }: ICadastroCategoriaDTO): void {
    console.log(nome, descricao);
  }
}

export { PostgresCategoriasRepository };
