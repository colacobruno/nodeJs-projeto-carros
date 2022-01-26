import crypto from "crypto";
import { request } from "express";
import multer from "multer";
import { resolve } from "path";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`; // concatena o nome com hash + nome orignal para n ter duplicidade
          return callback(null, fileName);
        },
      }),
    };
  },
};
