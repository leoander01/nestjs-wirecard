import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CardsEntity } from './card.entity'
import { CardsController } from './cards.controller'
import { CardsService } from './cards.service'

@Module({
  imports: [TypeOrmModule.forFeature([CardsEntity])],
  providers: [CardsService],
  controllers: [CardsController],
  exports: [CardsService],
})
export class CardsModule {}
