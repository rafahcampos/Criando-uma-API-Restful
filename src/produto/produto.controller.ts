import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criarProdutos(@Body() produtoData) {
    this.produtoRepository.salvar(produtoData);
    return this.produtoRepository;
  }

  @Get()
  async listarProdutos() {
    return this.produtoRepository.listar();
  }
}
