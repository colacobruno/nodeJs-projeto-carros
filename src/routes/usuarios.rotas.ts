import { Router } from "express";
import multer from "multer";

import { AtualizaAvatarUsuarioController } from "../modules/contas/useCases/atualizaAvatarUsuario/AtualizaAvatarUsuarioController";
import { CadastroUsuarioController } from "../modules/contas/useCases/cadastroUsuario/CadastroUsuarioController";

const usuariosRotas = Router();

const upload = multer({
  dest: "./avatar",
});

const cadastroUsuarioController = new CadastroUsuarioController();
const atualizaAvatarUsuarioController = new AtualizaAvatarUsuarioController();

usuariosRotas.post("/", cadastroUsuarioController.handle);
usuariosRotas.patch(
  "/avatar",
  upload.single("file"),
  atualizaAvatarUsuarioController.handle
);

export { usuariosRotas };
