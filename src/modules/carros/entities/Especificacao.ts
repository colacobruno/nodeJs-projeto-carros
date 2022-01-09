import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("especificacoes")
class Especificacao {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @CreateDateColumn()
  criado_em: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Especificacao };
