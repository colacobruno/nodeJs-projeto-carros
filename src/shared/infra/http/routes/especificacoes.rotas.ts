import { Router } from "express";

import "reflect-metadata";

import { CadastroEspecificacaoController } from "@modules/carros/useCases/especificacoes/cadastroEspecificacao/CadastroEspecificacaoController";
import { ListarEspecificacoesController } from "@modules/carros/useCases/especificacoes/listarEspecificacoes/ListarEspecificacoesController";

import { autenticado } from "../middlewares/autenticado";

const especificacoesRotas = Router();

const cadastroEspecificacaoController = new CadastroEspecificacaoController();
const listarEspecificacaoController = new ListarEspecificacoesController();

especificacoesRotas.use(autenticado);
especificacoesRotas.post("/", cadastroEspecificacaoController.handle);

especificacoesRotas.get("/", listarEspecificacaoController.handle);

export { especificacoesRotas };
