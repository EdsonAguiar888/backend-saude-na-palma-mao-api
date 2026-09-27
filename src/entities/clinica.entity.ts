import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('clinica')
export class Clinica {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id_clinica: number;

  @Column({ type: 'varchar', length: 150 })
  nome: string;

  @Column({ type: 'varchar', length: 255 })
  endereco: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefone: string;

  @CreateDateColumn({ type: 'timestamp', name: 'criado_em' })
  criado_em: Date;
}