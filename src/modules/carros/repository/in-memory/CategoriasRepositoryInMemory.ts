import { Categoria } from "@modules/carros/infra/typeorm/entities/Categoria";

import {
  ICadastroCategoriaDTO,
  ICategoriasRepository,
} from "../ICategoriasRepository";

class CategoriasRepositoryInMemory implements ICategoriasRepository {
  categorias: Categoria[] = [];

  async pesquisarPorNome(nome: string): Promise<Categoria> {
    const categoria = this.categorias.find(
      (categoria) => categoria.nome === nome
    );
    return categoria;
  }

  async listar(): Promise<Categoria[]> {
    const todasCategorias = this.categorias;
    return todasCategorias;
  }

  async cadastrar({ nome, descricao }: ICadastroCategoriaDTO): Promise<void> {
    const categoria = new Categoria();
    Object.assign(categoria, {
      nome,
      descricao,
    });

    this.categorias.push(categoria);
  }
}

export { CategoriasRepositoryInMemory };
