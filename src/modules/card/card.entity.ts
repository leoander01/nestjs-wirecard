import { IsDate, IsString } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('cards')
export class CardsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @IsString()
  @Column({ nullable: false, type: 'varchar', length: 30 })
  holderName: string

  @IsString()
  @Column({ nullable: false, type: 'varchar', length: 12 })
  numberCard: string

  @IsString()
  @Column({ nullable: false, type: 'varchar', length: 3 })
  numberBehindCard: string

  @IsDate()
  @Column({ nullable: false, type: 'date' })
  expirationDate: Date
}
