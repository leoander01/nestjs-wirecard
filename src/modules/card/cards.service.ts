import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { CardsEntity } from './card.entity'

@Injectable()
export class CardsService extends TypeOrmCrudService<CardsEntity> {
  constructor(@InjectRepository(CardsEntity) repo) {
    super(repo)
  }
}
