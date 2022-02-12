import { ICadastroCarroDTO } from "@modules/carros/dtos/ICadastroCarroDTO";
import { Carro } from "@modules/carros/infra/typeorm/entities/Carro";
import { ICarrosRepository } from "@modules/carros/repository/ICarrosRepository";

class CarrosRepositoryInMemory implements ICarrosRepository {
  carros: Carro[] = [];

  async cadastrar({
    nome,
    descricao,
    valor_diaria,
    placa,
    multa,
    marca,
    categoria_id,
  }: ICadastroCarroDTO): Promise<Carro> {
    const carro = new Carro();

    Object.assign(carro, {
      nome,
      descricao,
      valor_diaria,
      placa,
      multa,
      marca,
      categoria_id,
    });

    this.carros.push(carro);

    return carro;
  }

  async findByPlaca(placa: string): Promise<Carro> {
    return this.carros.find((carro) => carro.placa === placa);
  }
}

export { CarrosRepositoryInMemory };
