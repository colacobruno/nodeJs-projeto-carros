import { v4 as uuidv4 } from "uuid";

class Categoria {
  id?: string; // é opcional pois o construtor que irá se encarregar de criar ele
  nome: string;
  descricao: string;
  criado_em: Date;

  constructor() {
    if (!this.id) {
      // caso n tenha id, será criado
      this.id = uuidv4();
    }
  }
}

export { Categoria };
