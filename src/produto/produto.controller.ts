import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriarProdutoDto } from 'src/produto/dto/CriarProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criarProdutos(@Body() dadosDoProduto:CriarProdutoDto) {
    this.produtoRepository.salvar(dadosDoProduto);
    return this.produtoRepository;
  }

  @Get()
  async listarProdutos() {
    return this.produtoRepository.listar();
  }
}
