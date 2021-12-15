import { parse } from "csv-parse";
import fs from "fs";

import { ICategoriasRepository } from "../../../repository/ICategoriasRepository";

interface IImportarCategoria {
  nome: string;
  descricao: string;
}

class ImportarCategoriaUseCase {
  constructor(private categoriasRepository: ICategoriasRepository) {}

  carregarCategorias(file: Express.Multer.File): Promise<IImportarCategoria[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path); // fazer leitura do arquivo em partes
      const categorias: IImportarCategoria[] = [];

      const parseFile = parse({
        delimiter: ",",
      });

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [nome, descricao] = line;
          categorias.push({
            nome,
            descricao,
          });
        })
        .on("end", () => {
          resolve(categorias);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categorias = await this.carregarCategorias(file);
    console.log(categorias);

    categorias.map(async (categoria) => {
      const { nome, descricao } = categoria;

      const existeCategoria = this.categoriasRepository.pesquisarPorNome(nome);

      if (!existeCategoria) {
        this.categoriasRepository.cadastrar({
          nome,
          descricao,
        });
      }
    });
  }
}

export { ImportarCategoriaUseCase };
