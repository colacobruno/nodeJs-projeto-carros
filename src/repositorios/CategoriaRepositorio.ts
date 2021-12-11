import { Categoria } from "../modelos/Categoria";

interface ICadastroCategoriaDTO {
  nome: string;
  descricao: string;
}

class CategoriaRepositorio {
  private categorias: Categoria[];

  construtor() {
    this.categorias = [];
  }

  cadastrar({ nome, descricao }: ICadastroCategoriaDTO): void {
    const categoria = new Categoria();
    Object.assign(categoria, {
      nome,
      descricao,
      criado_em: new Date(),
    });
    this.categorias.push(categoria);
  }
}

export { CategoriaRepositorio };
