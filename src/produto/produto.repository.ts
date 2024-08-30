import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutoRepository {

  private produtos: ProdutoEntity[] = [];

  async salvar(produto) {
    this.produtos.push(produto);
  }

  async listar() {
    return this.produtos;
  }

  async existeComProdutoId(idProduto: string) {
    const possivelProduto = this.produtos.find(
      (produto) => produto.idProduto === idProduto,
    );
    return possivelProduto !== undefined;
  }

  async buscaPorId(idProduto: string) {
    const possivelProduto = this.produtos.find(
      (produtoSalvo) => produtoSalvo.idProduto === idProduto,
    );
    if (!possivelProduto) {
      throw new Error('Produto não exite');
    }
    return possivelProduto;
  }

  async atualiza(id: string, dadosDeAtualização: Partial<ProdutoEntity>) {
    const produto = this.buscaPorId(id)

    Object.entries(dadosDeAtualização).forEach
      (([chave, valor]) => {
        if (chave === 'idProduto' || chave === 'usuarioId') {
          return
        }
        produto[chave] = valor;
      })
    return produto;
  }

  async remove(idProduto: string) {
    const produto = this.buscaPorId(idProduto);
    this.produtos = this.produtos.filter(
      produtoSalvo => produtoSalvo.idProduto !== idProduto);
    return produto;
  }
}

