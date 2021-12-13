import { Categoria } from "../../models/Categoria";
import {
  ICadastroCategoriaDTO,
  ICategoriasRepository,
} from "../ICategoriasRepository";

class CategoriasRepository implements ICategoriasRepository {
  private categorias: Categoria[];

  private static INSTANCE: CategoriasRepository;

  private constructor() {
    this.categorias = [];
  }

  public static getInstance(): CategoriasRepository {
    if (!CategoriasRepository.INSTANCE) {
      CategoriasRepository.INSTANCE = new CategoriasRepository();
    }
    return CategoriasRepository.INSTANCE;
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

  listar(): Categoria[] {
    return this.categorias;
  }

  pesquisarPorNome(nome: string): Categoria {
    const categoria = this.categorias.find(
      (categoria) => categoria.nome === nome
    );
    return categoria;
  }
}

export { CategoriasRepository };
