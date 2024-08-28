import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDto } from './CaracteristicaProduto.dto';
import { ImagemDto } from './Imagem.dto';


export class CriarProdutoDto {
  @IsString()
  @IsNotEmpty({ message: 'O valor não pode ser vazio' })
  nome: string;

  @IsNumber()
  @IsPositive()
  valor: number;

  @IsNumber()
  @Min(0,{message:'O valor precisa ser mais ou igual a 0'})
  quantidadeDisponivel: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000,{message:'Precisa ter no máximo 1000 caracteres'})
  descricao: string;

  @IsString()
  categoria: string;

  @IsDateString()
  dataCriacao: string;

  @IsDateString()
  dataAtualizacao:string;

  @ValidateNested()
  @ArrayMinSize(3)
  @Type(() => CaracteristicaProdutoDto)
  caracteristicas: CaracteristicaProdutoDto;

  @ValidateNested()
  @ArrayMinSize(1)
  @IsNotEmpty()
  @Type(() => ImagemDto)
  imagens: ImagemDto;
}
