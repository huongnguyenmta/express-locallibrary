import { DataSource } from 'typeorm'
import { join } from 'path'
import 'dotenv/config'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  migrations: [join(__dirname, '../migration/*.{ts, js}')], // Cấu hình đường dẫn vào folder migration để typeorm nhận biết lấy source apply vào DB, ko liên quan đến cấu hình đg dẫn khi chạy lệnh generate migration
  entities: [join(__dirname, '../entity/*.entity.{ts, js}')],
  synchronize: false
})
