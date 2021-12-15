import { Router } from "express";
import multer from "multer";

import { cadastroCategoriaController } from "../modules/carros/useCases/categorias/cadastroCategoria";
import { listarCategoriasController } from "../modules/carros/useCases/categorias/listarCategorias";
import { importarCategoriaController } from "../modules/carros/useCases/categorias/importarCategoria";

const categoriasRotas = Router();

const upload = multer({
  dest: "./tmp",
});

categoriasRotas.post("/", (request, response) => {
  return cadastroCategoriaController.handle(request, response);
});

categoriasRotas.get("/", (request, response) => {
  return listarCategoriasController.handle(request, response);
});

categoriasRotas.post("/import", upload.single("file"), (request, response) => {
  return importarCategoriaController.handle(request, response);
});

export { categoriasRotas };
