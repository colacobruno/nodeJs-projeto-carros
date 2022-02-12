import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const conexao = await createConnection("localhost");

  const id = uuidV4();
  const senha = await hash("admin", 8);

  await conexao.query(
    `INSERT INTO USER(id, nome, email, senha, admin, criado_em)
      values('${id}', 'admin', 'admin@admin.com.br', '${senha}, true, ${new Date().getTime()})`
  );
}

create().then(() => console.log("Usuário admin criado!"));
