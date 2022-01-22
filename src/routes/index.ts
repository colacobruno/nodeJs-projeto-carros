import { Router } from "express";
import { autenticacaoRotas } from "./autenticacao.rotas";

import { categoriasRotas } from "./categorias.rotas";
import { especificacoesRotas } from "./especificacoes.rotas";
import { usuariosRotas } from "./usuarios.rotas";

const router = Router();

router.use("/categorias", categoriasRotas);
router.use("/especificacoes", especificacoesRotas);
router.use("/usuarios", usuariosRotas);
router.use(autenticacaoRotas);

export { router };
