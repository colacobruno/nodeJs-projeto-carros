import express, { json, response } from "express";

import { rotasCategorias } from "./rotas/categorias.rotas";

const app = express();

app.use(express.json());
app.use("/categorias", rotasCategorias);

app.listen(3333, () => console.log("Servidor rodando !"));
