import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingsController } from './settings/settings.controller';
import { TodolistsModule } from './todolists/todolists.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:2717/todolists'),
    TodolistsModule,
  ],
  controllers: [AppController, SettingsController],
  providers: [AppService],
})
export class AppModule {}
