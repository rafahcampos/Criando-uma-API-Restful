import { CaracteristicaProdutoDto } from "./dto/CaracteristicaProduto.dto";
import { ImagemDto } from "./dto/Imagem.dto";

export class ProdutoEntity{
    idProduto:string;
    usuarioId:string;
    nome:string;
    valor:number;
    quantidadeDisponivel:number;
    descricao:string;
    categoria:string;
    dataCriacao:string;
    dataAtualizacao:string;
    caracteristicas:CaracteristicaProdutoDto;
    imagens:ImagemDto;

}