import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BuyersEntity } from './buyer.entity'
import { BuyersController } from './buyers.controller'
import { BuyersService } from './buyers.service'

@Module({
  imports: [TypeOrmModule.forFeature([BuyersEntity])],
  controllers: [BuyersController],
  providers: [BuyersService],
  exports: [BuyersService],
})
export class BuyersModule {}
