import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { EmailEhUnico } from "src/usuario/validacao/email-eh-unico";

export class AtualizaUsuarioDTO{

    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    @IsOptional()
    nome:string;

    @IsEmail(undefined, {message:'O e-mail informado é inválido'})
    @EmailEhUnico({message:'Já existe um usuário com este e-mail'})
    @IsOptional()
    email: string;

    @MinLength(6, {message:'A senha precisa ter ao menos 6 caracteres'})
    @IsOptional()
    senha: string;
}