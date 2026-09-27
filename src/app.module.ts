


import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module.js';
import { UsuarioModule } from './usuarios/usuario.module.js';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
