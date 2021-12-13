import { Router } from "express";

import { categoriasRotas } from "./categorias.rotas";
import { especificacoesRotas } from "./especificacoes.rotas";

const router = Router();

router.use("/categorias", categoriasRotas);
router.use("/especificacoes", especificacoesRotas);

export { router };
