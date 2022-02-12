import { inject, injectable } from "tsyringe";

import { Categoria } from "@modules/carros/infra/typeorm/entities/Categoria";
import { ICategoriasRepository } from "@modules/carros/repository/ICategoriasRepository";

@injectable()
class ListarCategoriasUseCase {
  constructor(
    @inject("CategoriasRepository")
    private categoriasRepository: ICategoriasRepository
  ) {}

  async execute(): Promise<Categoria[]> {
    const categorias = await this.categoriasRepository.listar();

    return categorias;
  }
}

export { ListarCategoriasUseCase };
