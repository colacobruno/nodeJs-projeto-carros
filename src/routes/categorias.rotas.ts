import { Router } from "express";

import { cadastroCategoriaController } from "../modules/carros/useCases/categorias/cadastroCategoria";
import { listarCategoriasController } from "../modules/carros/useCases/categorias/listarCategorias";

const categoriasRotas = Router();

categoriasRotas.post("/", (request, response) => {
  return cadastroCategoriaController.handle(request, response);
});

categoriasRotas.get("/", (request, response) => {
  return listarCategoriasController.handle(request, response);
});

export { categoriasRotas };
