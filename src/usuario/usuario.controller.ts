
import { Controller, Post, Body, Get } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriarUsuarioDto } from "src/usuario/dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";


@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriarUsuarioDto) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);

        return {
            id: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome), 
            message: 'usuario criado com sucess'
        }
    }

    @Get()
    async listarUsuario() {
        const usuariosSalvos = await this.usuarioRepository.listar();

        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );
        return usuariosLista;
    }
}