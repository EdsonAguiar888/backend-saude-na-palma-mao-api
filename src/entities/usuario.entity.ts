import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';
import { TipoUsuario } from '../common/enums/tipo-usuario.enum.js';
import type { Paciente } from './paciente.entity.js';
import type { Profissional } from './profissional.entity.js';
import { Exclude } from 'class-transformer';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id_usuario: number;

  @Column({ type: 'varchar', length: 150 })
  nome: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  @Exclude()
  senha_hash: string;

  @Column({
    type: 'enum',
    enum: TipoUsuario,
  })
  tipo_usuario: TipoUsuario;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefone: string;

  @Column({ type: 'boolean', default: true })
  ativo: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'criado_em' })
  criado_em: Date;

  @OneToOne('Paciente', (paciente: Paciente) => paciente.usuario)
  paciente: Paciente;

  @OneToOne('Profissional', (profissional: Profissional) => profissional.usuario)
  profissional: Profissional;
}