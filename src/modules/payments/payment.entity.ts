import { IsNumber, IsOptional, IsString } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('payments')
export class PaymentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @IsNumber()
  @Column({ nullable: false, type: 'numeric' })
  amount: number

  @IsString()
  @Column({ nullable: false, type: 'varchar', length: 20 })
  type: string

  @IsOptional()
  @Column({ nullable: true, type: 'varchar', length: 40 })
  card: string
}
