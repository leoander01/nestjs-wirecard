import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { ClientEntity } from './client.entity'
import { ClientsService } from './clients.service'

@Crud({
  model: {
    type: ClientEntity,
  },
})
@Controller('clients')
export class ClientsController implements CrudController<ClientEntity> {
  constructor(public service: ClientsService) {}
}
