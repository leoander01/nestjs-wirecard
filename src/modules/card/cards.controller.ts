import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { CardsEntity } from './card.entity'
import { CardsService } from './cards.service'

@Crud({
  model: {
    type: CardsEntity,
  },
})
@Controller('cards')
export class CardsController implements CrudController<CardsEntity> {
  constructor(public service: CardsService) {}
}
