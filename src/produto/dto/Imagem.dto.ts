import {  IsUrl ,IsString } from "class-validator";

export class ImagemDto{

    @IsUrl()
    url:string;

    @IsString()
    descricao:string;
}