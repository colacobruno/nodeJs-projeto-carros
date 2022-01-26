import { Router } from "express";
import multer from "multer";

import uploadConfid from "../config/upload";
import { autenticado } from "../middlewares/autenticado";
import { AtualizaAvatarUsuarioController } from "../modules/contas/useCases/atualizaAvatarUsuario/AtualizaAvatarUsuarioController";
import { CadastroUsuarioController } from "../modules/contas/useCases/cadastroUsuario/CadastroUsuarioController";

const usuariosRotas = Router();

const uploadAvatar = multer(uploadConfid.upload("./tmp/avatar"));

const cadastroUsuarioController = new CadastroUsuarioController();
const atualizaAvatarUsuarioController = new AtualizaAvatarUsuarioController();

usuariosRotas.post("/", cadastroUsuarioController.handle);
usuariosRotas.patch(
  "/avatar",
  autenticado,
  uploadAvatar.single("avatar"),
  atualizaAvatarUsuarioController.handle
);

export { usuariosRotas };
