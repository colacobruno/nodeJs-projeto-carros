import { container } from "tsyringe";

import { CarrosRepository } from "@modules/carros/infra/typeorm/repository/CarrosRepository";
import { CategoriasRepository } from "@modules/carros/infra/typeorm/repository/CategoriasRepository";
import { EspecificacoesRepository } from "@modules/carros/infra/typeorm/repository/EspecificacoesRepository";
import { ICarrosRepository } from "@modules/carros/repository/ICarrosRepository";
import { ICategoriasRepository } from "@modules/carros/repository/ICategoriasRepository";
import { IEspecificacoesRepository } from "@modules/carros/repository/IEspecificacoesRepositry";
import { UsuariosRepository } from "@modules/contas/infra/typeorm/repository/UsuariosRepository";
import { IUsuariosRepository } from "@modules/contas/repository/IUsuariosRepository";

// ICategoriasRepository
// Passa o nome e qual é a classe que vai ser usada ao ser chamada pelo nome
container.registerSingleton<ICategoriasRepository>(
  "CategoriasRepository",
  CategoriasRepository
);

container.registerSingleton<IEspecificacoesRepository>(
  "EspecificacoesRepository",
  EspecificacoesRepository
);

container.registerSingleton<IUsuariosRepository>(
  "UsuariosRepository",
  UsuariosRepository
);

container.registerSingleton<ICarrosRepository>(
  "CarrosRepository",
  CarrosRepository
);
