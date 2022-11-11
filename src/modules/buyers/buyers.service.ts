import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { BuyersEntity } from './buyer.entity'

@Injectable()
export class BuyersService extends TypeOrmCrudService<BuyersEntity> {
  constructor(@InjectRepository(BuyersEntity) repo) {
    super(repo)
  }
}
