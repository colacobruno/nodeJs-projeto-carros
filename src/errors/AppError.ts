export class AppError {
  public readonly mensagem: string;

  public readonly codigoErro: number;

  constructor(mensagem: string, codigoErro) {
    this.mensagem = mensagem;
    this.codigoErro = codigoErro;
  }
}
