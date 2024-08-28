
import { Module } from "@nestjs/common";
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidador } from "./validacao/email-eh-unico";

@Module({
    controllers:[UsuarioController],
    providers:[UsuarioRepository, EmailEhUnicoValidador]
})

export class UsuarioModule{}