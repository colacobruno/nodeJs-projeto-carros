import { Request, Response } from "express";
import { container } from "tsyringe";

import { CadastroCarroUseCase } from "./CadastroCarroUseCase";

export class CadastroCarroControler {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao, valor_diaria, placa, multa, marca, categoria_id } =
      request.body;

    const cadastroCarroUseCase = container.resolve(CadastroCarroUseCase);

    const carro = await cadastroCarroUseCase.execute({
      nome,
      descricao,
      valor_diaria,
      placa,
      multa,
      marca,
      categoria_id,
    });

    return response.status(201).json(carro);
  }
}
