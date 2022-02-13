import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const conexao = await createConnection("localhost");

  const id = uuidV4();
  const senha = await hash("admin", 8);

  await conexao.query(
    `INSERT INTO USUARIOS(id, nome, email, senha, admin, criado_em, cnh)
      values('${id}', 'admin', 'admin@admin.com.br', '${senha}', true, 'now()', 'XXXXX')`
  );

  await conexao.close();
}

create().then(() => console.log("Usuário admin criado!"));
