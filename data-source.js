import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import 'dotenv/config'

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [
    'src/modules/**/*.entity{.ts,.js}',
  ],
  migrations: ['src/migrations/*{.ts,.js}', 'dist/migrations/*{.ts,.js}'],
})
