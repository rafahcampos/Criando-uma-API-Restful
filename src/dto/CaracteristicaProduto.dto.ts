import { IsString } from 'class-validator';

export class CaracteristicaProdutoDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;
}
