import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "src/usuario/validacao/email-eh-unico";

export class CriarUsuarioDto{

    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    nome:string;

    @IsEmail(undefined, {message:'O e-mail informado é inválido'})
    @EmailEhUnico({message:'Já existe um usuário com este e-mail'})
    email: string;

    @MinLength(6, {message:'A senha precisa ter ao menos 6 caracteres'})
    senha: string;
}