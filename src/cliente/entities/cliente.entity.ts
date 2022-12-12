import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;
}
