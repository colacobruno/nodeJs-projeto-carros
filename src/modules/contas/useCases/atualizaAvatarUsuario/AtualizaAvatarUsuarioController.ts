import { Response, Request } from "express";
import { container } from "tsyringe";

import { AtualizaAvatarUsuarioUseCase } from "./AtualizaAvatarUsuarioUseCase";

class AtualizaAvatarUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.usuario;
    const avatar_file = request.file.filename;

    const atualizaUsuarioAvatarUsecase = container.resolve(
      AtualizaAvatarUsuarioUseCase
    );

    await atualizaUsuarioAvatarUsecase.execute({ usuario_id: id, avatar_file });

    return response.status(204).send();
  }
}

export { AtualizaAvatarUsuarioController };
