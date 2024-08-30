import { IsString } from 'class-validator';
import { NOMEM } from 'dns';

export class CaracteristicaProdutoDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;
}
