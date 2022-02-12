import { Router } from "express";

import "reflect-metadata";

import { CadastroCarroControler } from "../../../../modules/carros/useCases/carros/cadastroCarro/CadastroCarroControler";

const carrosRotas = Router();

const cadastroCarroControler = new CadastroCarroControler();

carrosRotas.post("/", cadastroCarroControler.handle);

export { carrosRotas };
