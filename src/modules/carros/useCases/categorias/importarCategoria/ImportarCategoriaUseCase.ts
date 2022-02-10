import { parse } from "csv-parse";
import fs from "fs";
import { injectable, inject } from "tsyringe";

import { ICategoriasRepository } from "@modules/carros/repository/ICategoriasRepository";

interface IImportarCategoria {
  nome: string;
  descricao: string;
}
@injectable()
class ImportarCategoriaUseCase {
  constructor(
    @inject("CategoriasRepository")
    private categoriasRepository: ICategoriasRepository
  ) {}

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
          fs.promises.unlink(file.path); // removendo o arquivo depois de finalizar a importação
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

      const existeCategoria = await this.categoriasRepository.pesquisarPorNome(
        nome
      );

      if (!existeCategoria) {
        await this.categoriasRepository.cadastrar({
          nome,
          descricao,
        });
      }
    });
  }
}

export { ImportarCategoriaUseCase };
