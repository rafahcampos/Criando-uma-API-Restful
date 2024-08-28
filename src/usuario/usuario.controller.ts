
import { Controller, Post, Body, Get } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriarUsuarioDto } from "src/dto/CriaUsuario.dto";



@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository:UsuarioRepository){}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario:CriarUsuarioDto) {
        this.usuarioRepository.salvar(dadosDoUsuario)
        return dadosDoUsuario
    }

    @Get()
    async listarUsuario(){
        return this.usuarioRepository.listar();
    }
}