import { getRepository, Repository } from "typeorm";

import { ICadastroCarroDTO } from "@modules/carros/dtos/ICadastroCarroDTO";
import { ICarrosRepository } from "@modules/carros/repository/ICarrosRepository";

import { Carro } from "../entities/Carro";

class CarrosRepository implements ICarrosRepository {
  private repository: Repository<Carro>;

  constructor() {
    this.repository = getRepository(Carro);
  }

  async cadastrar({
    nome,
    descricao,
    valor_diaria,
    placa,
    multa,
    marca,
    categoria_id,
  }: ICadastroCarroDTO): Promise<Carro> {
    const carro = this.repository.create({
      nome,
      descricao,
      valor_diaria,
      placa,
      multa,
      marca,
      categoria_id,
    });

    await this.repository.save(carro);

    return carro;
  }
  async findByPlaca(placa: string): Promise<Carro> {
    const carro = await this.repository.findOne({ placa });
    return carro;
  }
}

export { CarrosRepository };
