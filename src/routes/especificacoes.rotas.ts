import { Router } from "express";
import { autenticado } from "../middlewares/autenticado";

import { CadastroEspecificacaoController } from "../modules/carros/useCases/especificacoes/cadastroEspecificacao/CadastroEspecificacaoController";
import { ListarEspecificacoesController } from "../modules/carros/useCases/especificacoes/listarEspecificacoes/ListarEspecificacoesController";

const especificacoesRotas = Router();

const cadastroEspecificacaoController = new CadastroEspecificacaoController();
const listarEspecificacaoController = new ListarEspecificacoesController();

especificacoesRotas.use(autenticado);
especificacoesRotas.post("/", cadastroEspecificacaoController.handle);

especificacoesRotas.get("/", listarEspecificacaoController.handle);

export { especificacoesRotas };
