import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { PaymentsEntity } from './payment.entity'
import { PaymentsService } from './payments.service'

@Crud({
  model: {
    type: PaymentsEntity,
  },
})
@Controller('payments')
export class PaymentsController implements CrudController<PaymentsEntity> {
  constructor(public service: PaymentsService) {}
}
