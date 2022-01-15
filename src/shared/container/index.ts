import { container } from "tsyringe";

import { ICategoriasRepository } from "../../modules/carros/repository/ICategoriasRepository";
import { IEspecificacoesRepository } from "../../modules/carros/repository/IEspecificacoesRepositry";
import { CategoriasRepository } from "../../modules/carros/repository/implementacoes/CategoriasRepository";
import { EspecificacoesRepository } from "../../modules/carros/repository/implementacoes/EspecificacoesRepository";
import { UsuariosRepository } from "../../modules/contas/repository/implementacoes/UsuariosRepository";
import { IUsuariosRepository } from "../../modules/contas/repository/IUsuariosRepository";

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
