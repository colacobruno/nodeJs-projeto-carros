import { CategoriasRepositoryInMemory } from "@modules/carros/repository/in-memory/CategoriasRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CadastroCategoriaUseCase } from "./CadastroCategoriaUseCase";

let cadastroCategoriaUseCase: CadastroCategoriaUseCase;
let categoriaRepositoryInMemory: CategoriasRepositoryInMemory;

describe("Cadastar categoria", () => {
  beforeEach(() => {
    categoriaRepositoryInMemory = new CategoriasRepositoryInMemory();
    cadastroCategoriaUseCase = new CadastroCategoriaUseCase(
      categoriaRepositoryInMemory
    );
  });

  it("Deve ser capaz de criar uma categoria", async () => {
    const categoria = {
      nome: "Categoria Teste",
      descricao: "Descrição de teste",
    };

    await cadastroCategoriaUseCase.execute({
      nome: categoria.nome,
      descricao: categoria.descricao,
    });
    const categoriaCriada = await categoriaRepositoryInMemory.pesquisarPorNome(
      categoria.nome
    );
    console.log(categoriaCriada);
    expect(categoriaCriada).toHaveProperty("id");
  });

  it("Não deve ser capaz de criar uma categoria já existente", async () => {
    expect(async () => {
      const categoria = {
        nome: "Categoria Teste",
        descricao: "Descrição de teste",
      };

      await cadastroCategoriaUseCase.execute({
        nome: categoria.nome,
        descricao: categoria.descricao,
      });

      await cadastroCategoriaUseCase.execute({
        nome: categoria.nome,
        descricao: categoria.descricao,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
