import { CarrosRepositoryInMemory } from "@modules/carros/repository/in-memory/CarrosRepositoryInMemory";

import { AppError } from "../../../../../shared/errors/AppError";
import { CadastroCarroUseCase } from "./CadastroCarroUseCase";

let cadastroCarroUseCase: CadastroCarroUseCase;
let carrosRepositoryInMemory: CarrosRepositoryInMemory;

describe("Cadastro carro", () => {
  beforeEach(() => {
    carrosRepositoryInMemory = new CarrosRepositoryInMemory();
    cadastroCarroUseCase = new CadastroCarroUseCase(carrosRepositoryInMemory);
  });

  it("Deve ser possível criar um novo carro", async () => {
    const carro = await cadastroCarroUseCase.execute({
      nome: "Nome do carro",
      descricao: "Descrição do carro",
      valor_diaria: 100,
      placa: "XXX-0000",
      multa: 60,
      marca: "Marca",
      categoria_id: "categoria",
    });

    expect(carro).toHaveProperty("id");
  });

  it("Não deve ser possível criar um carro com a mesma placa", () => {
    expect(async () => {
      await cadastroCarroUseCase.execute({
        nome: "Carro1",
        descricao: "Descrição do carro",
        valor_diaria: 100,
        placa: "XXX-0000",
        multa: 60,
        marca: "Marca",
        categoria_id: "categoria",
      });
      await cadastroCarroUseCase.execute({
        nome: "Carro2",
        descricao: "Descrição do carro",
        valor_diaria: 100,
        placa: "XXX-0000",
        multa: 60,
        marca: "Marca",
        categoria_id: "categoria",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Deve ser possível criar um carro com a disponibilidade true por padrão", async () => {
    const carro = await cadastroCarroUseCase.execute({
      nome: "Carro Disponível",
      descricao: "Descrição do carro",
      valor_diaria: 100,
      placa: "ABC-0000",
      multa: 60,
      marca: "Marca",
      categoria_id: "categoria",
    });

    expect(carro.disponivel).toBe(true);
  });
});
