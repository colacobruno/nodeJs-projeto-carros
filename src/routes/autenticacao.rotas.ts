import { Router } from "express";

import "reflect-metadata";

import { AutenticacaoUsuarioController } from "../modules/contas/useCases/autenticacaoUsuario/AutenticacaoUsuarioController";

const autenticacaoRotas = Router();

const autenticacaoUsuarioController = new AutenticacaoUsuarioController();

autenticacaoRotas.post("/sessao", autenticacaoUsuarioController.handle);

export { autenticacaoRotas };
