import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Paciente } from './paciente.entity.js';
import { Profissional } from './profissional.entity.js';
import { Clinica } from './clinica.entity.js';
import { StatusAgendamento } from '../common/enums/status-agendamento.enum.js';

@Entity('agendamento')
export class Agendamento {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id_agendamento: number;

  @Column({ type: 'bigint' })
  id_paciente: number;

  @ManyToOne(() => Paciente, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_paciente' })
  paciente: Paciente;

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

  @Column({ type: 'datetime', name: 'data_hora_agendamento' })
  data_hora_agendamento: Date;

  @Column({
    type: 'enum',
    enum: StatusAgendamento,
    default: StatusAgendamento.PENDENTE,
  })
  status: StatusAgendamento;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @CreateDateColumn({ type: 'timestamp', name: 'criado_em' })
  criado_em: Date;
}