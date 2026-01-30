/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {
  async criptografarSenha(senha: string): Promise<string> {
    const saltos: number = 10;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await bcrypt.hash(senha, saltos);
  }

  // eslint-disable-next-line prettier/prettier
  async compararSenhas(senhaDigitada: string, senhaBanco: string): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await bcrypt.compare(senhaDigitada, senhaBanco);
  }
}
