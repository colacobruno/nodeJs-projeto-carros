import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/infra/typeorm";

import "@shared/container";
import { AppError } from "@shared/errors/AppError";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

import "reflect-metadata";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

// Criando middleware de error para quando usar a classe AppError o sistema pegar o erro
// e jogar na tela ao invés de quebrar o código
// alem disso teve que adicionar a biblioteca yarn add express-async-erros
app.use(
  (err: Error, Request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.codigoErro).json({
        mensagem: err.mensagem,
      });
    }

    return response.status(500).json({
      status: "error",
      mensagem: `Erro interno no servidor - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Servidor rodando !"));
