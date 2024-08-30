import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDto } from './CaracteristicaProduto.dto';
import { ImagemDto } from './Imagem.dto';


export class AtualizaProdutoDTO {

  @IsUUID(undefined,({message:'Id de produto inválido'}))
  idProduto:string;

  @IsUUID(undefined,({message:'Id de usuário inválido'}))
  usuarioId:string;

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'O valor não pode ser vazio' })
  nome: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  valor: number;

  @IsNumber()
  @Min(0,{message:'O valor precisa ser mais ou igual a 0'})
  @IsOptional()
  quantidadeDisponivel: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000,{message:'Precisa ter no máximo 1000 caracteres'})
  @IsOptional()
  descricao: string;

  @IsString()
  @IsOptional()
  categoria: string;

  @IsDateString()
  @IsOptional()
  dataCriacao: string;

  @IsDateString()
  @IsOptional()
  dataAtualizacao:string;

  @ValidateNested()
  @ArrayMinSize(3)
  @Type(() => CaracteristicaProdutoDto)
  @IsOptional()
  caracteristicas: CaracteristicaProdutoDto;

  @ValidateNested()
  @ArrayMinSize(1)
  @IsNotEmpty()
  @IsOptional()
  @Type(() => ImagemDto)
  imagens: ImagemDto;
}
