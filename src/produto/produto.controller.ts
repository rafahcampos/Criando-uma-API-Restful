import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriarProdutoDto } from 'src/produto/dto/CriarProduto.dto';
import { ProdutoEntity } from './produto.entity';
import { AtualizaProdutoDTO } from './dto/AtualizarProduto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) { }

  @Post()
  async criarProdutos(@Body() dadosDoProduto: CriarProdutoDto) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.idProduto = dadosDoProduto.idProduto;
    produtoEntity.usuarioId = dadosDoProduto.usuarioId;
    produtoEntity.nome = dadosDoProduto.nome;
    produtoEntity.valor = dadosDoProduto.valor;
    produtoEntity.quantidadeDisponivel = dadosDoProduto.quantidadeDisponivel;
    produtoEntity.descricao = dadosDoProduto.descricao;
    produtoEntity.categoria = dadosDoProduto.categoria;
    produtoEntity.dataCriacao = dadosDoProduto.dataCriacao;
    produtoEntity.dataAtualizacao = dadosDoProduto.dataAtualizacao;
    produtoEntity.caracteristicas = dadosDoProduto.caracteristicas;
    produtoEntity.imagens = dadosDoProduto.imagens;

    this.produtoRepository.salvar(dadosDoProduto);
    return this.produtoRepository;
  }

  @Get()
  async listarProdutos() {
    return this.produtoRepository.listar();
  }

  @Put('/:id')
  async atualizaProduto(
    @Param('id') idProduto: string,
    @Body() novosDados: AtualizaProdutoDTO,
  ) {
    const produtoAtualizado = await this.produtoRepository.atualiza(
      idProduto,
      novosDados
    );
    return {
      produtoAtualizado,
      message: 'produto atualizado com sucesso'
    }
  }

  async removeProduto(@Param('id') id: string) {
    const produtoRemovido = await this.produtoRepository.remove(id)
    return {
      produtoRemovido,
      message: 'usuário removido com sucesso'
    }
  }
}
