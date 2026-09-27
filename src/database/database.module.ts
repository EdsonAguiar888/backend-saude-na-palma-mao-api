import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get<string>('DB_USERNAME', 'projeto_user'),
        password: configService.get<string>('DB_PASSWORD', 'projeto_password'),
        database: configService.get<string>('DB_DATABASE', 'projeto_db'),


        
        // entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],



        entities: [join(__dirname, '/../entities/*.entity{.ts,.js}')],
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {}