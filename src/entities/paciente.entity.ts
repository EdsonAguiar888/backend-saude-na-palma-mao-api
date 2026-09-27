import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import type { Usuario } from './usuario.entity.js';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id_paciente: number;

  @Column({ type: 'bigint' })
  id_usuario: number;

  @OneToOne('Usuario', (usuario: Usuario) => usuario.paciente, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ type: 'date', nullable: true })
  data_nascimento: Date;

  @Column({ type: 'varchar', length: 14, unique: true, nullable: true })
  cpf: string;

  @Column({ type: 'text', nullable: true })
  historico_medico: string;

  @CreateDateColumn({ type: 'timestamp', name: 'criado_em' })
  criado_em: Date;
}