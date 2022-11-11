import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { PaymentsEntity } from './payment.entity'

@Injectable()
export class PaymentsService extends TypeOrmCrudService<PaymentsEntity> {
  constructor(@InjectRepository(PaymentsEntity) repo) {
    super(repo)
  }
}
