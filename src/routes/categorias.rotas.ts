import { Router } from "express";

import { CategoriasRepository } from "../repository/Categorias/CategoriasRepository";
import { PostgresCategoriasRepository } from "../repository/PostgresCategoriasRepository";
import { CadastroCategoriaService } from "../services/Categorias/CadastroCategoriaService";

const rotasCategorias = Router();
const categoriasRepository = new CategoriasRepository();
// const categoriasRepository = new PostgresCategoriasRepository();

rotasCategorias.post("/", (request, response) => {
  const { nome, descricao } = request.body;

  const cadastroCategoriaService = new CadastroCategoriaService(
    categoriasRepository
  );

  cadastroCategoriaService.execute({ nome, descricao });

  return response.status(201).send();
});

rotasCategorias.get("/", (request, response) => {
  const todas = categoriasRepository.listar();

  return response.json(todas);
});

export { rotasCategorias };
