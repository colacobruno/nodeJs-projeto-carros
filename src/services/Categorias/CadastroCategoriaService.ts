import { ICategoriasRepository } from "../../repository/ICategoriasRepository";

interface IRequest {
  nome: string;
  descricao: string;
}

class CadastroCategoriaService {
  constructor(private categoriasRepository: ICategoriasRepository) {}

  execute({ nome, descricao }: IRequest): void {
    const existeCategoria = this.categoriasRepository.pesquisarPorNome(nome);

    if (existeCategoria) {
      throw new Error("Essa categoria já existe");
    }

    this.categoriasRepository.cadastrar({ nome, descricao });
  }
}

export { CadastroCategoriaService };
