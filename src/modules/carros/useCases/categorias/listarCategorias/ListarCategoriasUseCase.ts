import { Categoria } from "../../../entities/Categoria";
import { ICategoriasRepository } from "../../../repository/ICategoriasRepository";

class ListarCategoriasUseCase {
  constructor(private categoriasRepository: ICategoriasRepository) {}

  execute(): Categoria[] {
    const categorias = this.categoriasRepository.listar();

    return categorias;
  }
}

export { ListarCategoriasUseCase };
