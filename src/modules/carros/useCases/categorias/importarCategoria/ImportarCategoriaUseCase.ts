import { parse } from "csv-parse";
import fs from "fs";

class ImportarCategoriaUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path); // fazer leitura do arquivo em partes

    const parseFile = parse({
      delimiter: ",",
    });

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportarCategoriaUseCase };
