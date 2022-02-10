import { getRepository, Repository } from "typeorm";

import { Categoria } from "@modules/carros/entities/Categoria";

import {
  ICadastroCategoriaDTO,
  ICategoriasRepository,
} from "../ICategoriasRepository";

class CategoriasRepository implements ICategoriasRepository {
  private repository: Repository<Categoria>;

  constructor() {
    this.repository = getRepository(Categoria);
  }

  async cadastrar({ nome, descricao }: ICadastroCategoriaDTO): Promise<void> {
    const categoria = this.repository.create({
      descricao,
      nome,
    });

    await this.repository.save(categoria);
  }

  async listar(): Promise<Categoria[]> {
    const categorias = await this.repository.find();
    return categorias;
  }

  async pesquisarPorNome(nome: string): Promise<Categoria> {
    // Select * from categorias where nome = "nome" limit 1
    const categoria = await this.repository.findOne({ nome });
    return categoria;
  }
}

export { CategoriasRepository };
