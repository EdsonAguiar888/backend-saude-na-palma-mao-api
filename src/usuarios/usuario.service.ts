import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity.js';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import * as crypto from 'crypto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuarioExistente = await-this.usuarioRepository.findOne({
      where: { email: createUsuarioDto.email },
    });

    if (usuarioExistente) {
      throw new ConflictException('E-mail já cadastrado no sistema.');
    }

    // Gerando hash simples da senha para persistência segura no banco
    const senha_hash = crypto
      .createHash('sha256')
      .update(createUsuarioDto.senha)
      .digest('hex');

    const novoUsuario = this.usuarioRepository.create({
      nome: createUsuarioDto.nome,
      email: createUsuarioDto.email,
      senha_hash,
      tipo_usuario: createUsuarioDto.tipo_usuario,
      telefone: createUsuarioDto.telefone,
    });

    return await this.usuarioRepository.save(novoUsuario);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id_usuario: id },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }

    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);

    if (updateUsuarioDto.senha) {
      usuario.senha_hash = crypto
        .createHash('sha256')
        .update(updateUsuarioDto.senha)
        .digest('hex');
    }

    Object.assign(usuario, {
      nome: updateUsuarioDto.nome ?? usuario.nome,
      email: updateUsuarioDto.email ?? usuario.email,
      telefone: updateUsuarioDto.telefone ?? usuario.telefone,
      tipo_usuario: updateUsuarioDto.tipo_usuario ?? usuario.tipo_usuario,
    });

    return await this.usuarioRepository.save(usuario);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
  }
}