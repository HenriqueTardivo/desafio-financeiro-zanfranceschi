import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Saldo {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column({ type: 'char', length: 1 })
  public operation: 'D' | 'W';
  // D - deposit, W - withdraw

  @Column({ type: 'float' })
  public value: number;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;
}
