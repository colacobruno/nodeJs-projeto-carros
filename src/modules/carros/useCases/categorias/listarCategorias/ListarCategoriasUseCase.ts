import { inject, injectable } from "tsyringe";

import { Categoria } from "../../../entities/Categoria";
import { ICategoriasRepository } from "../../../repository/ICategoriasRepository";

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
