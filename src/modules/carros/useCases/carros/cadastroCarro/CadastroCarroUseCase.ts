import { inject, injectable } from "tsyringe";

import { Carro } from "@modules/carros/infra/typeorm/entities/Carro";
import { ICarrosRepository } from "@modules/carros/repository/ICarrosRepository";

import { AppError } from "../../../../../shared/errors/AppError";

interface IRequest {
  nome: string;
  descricao: string;
  valor_diaria: number;
  placa: string;
  multa: number;
  marca: string;
  categoria_id: string;
}

@injectable()
class CadastroCarroUseCase {
  constructor(
    @inject("CarrosRepository")
    private carrosRepository: ICarrosRepository
  ) {}

  async execute({
    nome,
    descricao,
    valor_diaria,
    placa,
    multa,
    marca,
    categoria_id,
  }: IRequest): Promise<Carro> {
    const carroExiste = await this.carrosRepository.findByPlaca(placa);

    if (carroExiste) {
      throw new AppError("O carro já existe !", 400);
    }

    const carro = await this.carrosRepository.cadastrar({
      nome,
      descricao,
      valor_diaria,
      placa,
      multa,
      marca,
      categoria_id,
    });

    return carro;
  }
}

export { CadastroCarroUseCase };
