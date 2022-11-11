import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IsEmail, IsString } from 'class-validator'

@Entity('buyers')
export class BuyersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: string

  @Column({ nullable: false, type: 'varchar', length: 100 })
  name: string

  @IsEmail()
  @Column({ nullable: false, type: 'varchar', length: 100 })
  email: string

  @IsString()
  @Column({ nullable: true, type: 'varchar', length: 14 })
  cpf: string
}
