import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Profissional } from './profissional.entity.js';
import { Clinica } from './clinica.entity.js';
import { StatusDisponibilidade } from '../common/enums/status-disponibilidade.enum.js';

@Entity('disponibilidade')
export class Disponibilidade {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id_disponibilidade: number;

  @Column({ type: 'bigint' })
  id_profissional: number;

  @ManyToOne(() => Profissional, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_profissional' })
  profissional: Profissional;

  @Column({ type: 'bigint' })
  id_clinica: number;

  @ManyToOne(() => Clinica, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_clinica' })
  clinica: Clinica;

  @Column({ type: 'datetime', name: 'data_hora_inicio' })
  data_hora_inicio: Date;

  @Column({ type: 'datetime', name: 'data_hora_fim' })
  data_hora_fim: Date;

  @Column({
    type: 'enum',
    enum: StatusDisponibilidade,
    default: StatusDisponibilidade.DISPONIVEL,
  })
  status: StatusDisponibilidade;

  @CreateDateColumn({ type: 'timestamp', name: 'criado_em' })
  criado_em: Date;
}