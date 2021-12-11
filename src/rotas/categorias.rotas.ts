import { Router } from "express";

import { CategoriaRepositorio } from "../repositorios/CategoriaRepositorio";

const rotasCategorias = Router();
const categoriaRepositorio = new CategoriaRepositorio();

rotasCategorias.post("/", (request, response) => {
  const { nome, descricao } = request.body;

  categoriaRepositorio.cadastrar({ nome, descricao });

  return response.status(201).send();
});

export { rotasCategorias };
