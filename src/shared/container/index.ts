import { container } from "tsyringe";

import { ICategoriasRepository } from "../../modules/carros/repository/ICategoriasRepository";
import { CategoriasRepository } from "../../modules/carros/repository/implementacoes/CategoriasRepository";

// ICategoriasRepository
// Passa o nome e qual é a classe que vai ser usada ao ser chamada pelo nome
container.registerSingleton<ICategoriasRepository>(
  "CatecoriasRepository",
  CategoriasRepository
);
