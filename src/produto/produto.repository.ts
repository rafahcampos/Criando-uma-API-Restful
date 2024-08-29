import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutoRepository {
  private produtos:ProdutoEntity[] = [];

  async salvar(produto) {
    this.produtos.push(produto);
  }

  async listar() {
    return this.produtos;
  }

  async existeComProdutoId(idProduto:string){
    const possivelProduto = this.produtos.find(
      produto=> produto.idProduto === idProduto
    );
    return possivelProduto !== undefined;
  }
}
