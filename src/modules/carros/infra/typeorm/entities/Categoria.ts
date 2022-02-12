import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("categorias")
class Categoria {
  @PrimaryColumn()
  id?: string; // é opcional pois o construtor que irá se encarregar de criar ele

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @CreateDateColumn()
  criado_em: Date;

  constructor() {
    if (!this.id) {
      // caso n tenha id, será criado
      this.id = uuidv4();
    }
  }
}

export { Categoria };
