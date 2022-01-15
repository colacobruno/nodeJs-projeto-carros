import { Router } from "express";
import { CadastroUsuarioController } from "../modules/contas/useCases/cadastroUsuario/CadastroUsuarioController";

const usuariosRotas = Router();

const cadastroUsuarioController = new CadastroUsuarioController();

usuariosRotas.post("/", cadastroUsuarioController.handle);

export { usuariosRotas };
