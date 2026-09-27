import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import type { Usuario } from './usuario.entity.js';

@Entity('profissional')
export class Profissional {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id_profissional: number;

  @Column({ type: 'bigint' })
  id_usuario: number;

  @OneToOne('Usuario', (usuario: Usuario) => usuario.profissional, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ type: 'varchar', length: 100 })
  especialidade: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  registro_profissional: string;

  @CreateDateColumn({ type: 'timestamp', name: 'criado_em' })
  criado_em: Date;
}