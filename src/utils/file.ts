import fs from "fs";

export const deleteFile = async (filename: string) => {
  // console.log(filename);
  try {
    await fs.promises.stat(filename); // verifica se o arquivo já existe
  } catch {
    return;
  }
  await fs.promises.unlink(filename); // deleta o arqruivo de fato
};
