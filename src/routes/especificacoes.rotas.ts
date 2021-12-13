import { Router } from "express";

import { listarCategoriasController } from "../modules/carros/useCases/categorias/listarCategorias";
import { cadastroEspecificacaoController } from "../modules/carros/useCases/especificacoes/cadastroEspecificacao";

const especificacoesRotas = Router();

especificacoesRotas.post("/", (request, response) => {
  return cadastroEspecificacaoController.handle(request, response);
});

especificacoesRotas.get("/", (request, response) => {
  return listarCategoriasController.handle(request, response);
});

export { especificacoesRotas };
