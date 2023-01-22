import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TodolistsController } from './todolists/todolists.controller';
// import { TodolistsService } from './todolists/todolists.service';
import { TodolistsModule } from './todolists/todolist.module';

@Module({
  imports: [
    TodolistsModule,
    MongooseModule.forRoot('mongodb://localhost:2717/todolists'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
