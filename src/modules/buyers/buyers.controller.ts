import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { BuyersEntity } from './buyer.entity'
import { BuyersService } from './buyers.service'

@Crud({
  model: {
    type: BuyersEntity,
  },
})
@Controller('buyers')
export class BuyersController implements CrudController<BuyersEntity> {
  constructor(public service: BuyersService) {}
}
