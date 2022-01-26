import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("usuarios")
class Usuario {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cnh: string;

  @Column()
  senha: string;

  @Column()
  admin: boolean;

  @Column()
  avatar: string;

  @CreateDateColumn()
  criado_em: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Usuario };
