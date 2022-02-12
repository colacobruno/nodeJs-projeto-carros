import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Categoria } from "@modules/carros/infra/typeorm/entities/Categoria";

@Entity("carros")
class Carro {
  @PrimaryColumn()
  id?: string; // é opcional pois o construtor que irá se encarregar de criar ele

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  disponivel: boolean;

  @Column()
  valor_diaria: number;

  @Column()
  placa: string;

  @Column()
  multa: number;

  @Column()
  marca: string;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: "categoria_id" })
  categoria: Categoria;

  @Column()
  categoria_id: string;

  @CreateDateColumn()
  criado_em: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.disponivel = true;
    }
  }
}

export { Carro };
