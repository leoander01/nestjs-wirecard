import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClientsModule } from './modules/clients/clients.module'
import { BuyersModule } from './modules/buyers/buyers.module'
import { PaymentsModule } from './modules/payments/payments.module'
import { CardsModule } from 'modules/card/cards.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${__dirname}/modules/**/*.entity{.ts,.js}`],
      synchronize: true,
    }),
    ClientsModule,
    BuyersModule,
    PaymentsModule,
    CardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
