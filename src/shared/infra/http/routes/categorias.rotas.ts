import { Router } from "express";
import multer from "multer";

import "reflect-metadata";

import { CadastroCategoriaController } from "@modules/carros/useCases/categorias/cadastroCategoria/CadastroCategoriaController";
import { ImportarCategoriaController } from "@modules/carros/useCases/categorias/importarCategoria/ImportarCategoriaController";
import { ListarCategoriasController } from "@modules/carros/useCases/categorias/listarCategorias/ListarCategoriasController";

const categoriasRotas = Router();

const upload = multer({
  dest: "./tmp",
});

const cadastroCategoriaController = new CadastroCategoriaController();
const importarCategoriaController = new ImportarCategoriaController();
const listarCategoriasController = new ListarCategoriasController();

categoriasRotas.post("/", cadastroCategoriaController.handle);

categoriasRotas.get("/", listarCategoriasController.handle);

categoriasRotas.post(
  "/import",
  upload.single("file"),
  importarCategoriaController.handle
);

export { categoriasRotas };
