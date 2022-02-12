import { ICadastroCarroDTO } from "../dtos/ICadastroCarroDTO";
import { Carro } from "../infra/typeorm/entities/Carro";

interface ICarrosRepository {
  findByPlaca(placa: string): Promise<Carro>;
  cadastrar(data: ICadastroCarroDTO): Promise<Carro>;
}

export { ICarrosRepository };
