import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Postagem } from '../src/postagem/entities/postagem.entity';
import { PostagemService } from '../src/postagem/services/postagem.services';

@Controller('/postagens')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }
}
