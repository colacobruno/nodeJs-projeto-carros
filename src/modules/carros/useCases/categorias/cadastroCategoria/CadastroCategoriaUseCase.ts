import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ICategoriasRepository } from "@modules/carros/repository/ICategoriasRepository";

interface IRequest {
  nome: string;
  descricao: string;
}

@injectable() // Permite que a classe seja injetada
class CadastroCategoriaUseCase {
  constructor(
    // Irá no arquivo index.ts do container e vai criar a instancia de acordo com o nome que achar
    // no caso é a de CategoriasRepository
    // feito isso, não será mais neessário ficar dando new nessa classe
    @inject("CategoriasRepository")
    private categoriasRepository: ICategoriasRepository
  ) {}

  async execute({ nome, descricao }: IRequest): Promise<void> {
    const existeCategoria = await this.categoriasRepository.pesquisarPorNome(
      nome
    );

    if (existeCategoria) {
      throw new AppError("Essa categoria já existe !", 400);
    }

    this.categoriasRepository.cadastrar({ nome, descricao });
  }
}

export { CadastroCategoriaUseCase };
