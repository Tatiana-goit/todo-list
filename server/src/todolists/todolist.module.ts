import { Module } from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { TodolistsController } from './todolists.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todolist, TodolistSchema } from './schemas/todolists.schemas';

@Module({
  providers: [TodolistsService],
  controllers: [TodolistsController],
  imports: [
    MongooseModule.forFeature([
      { name: Todolist.name, schema: TodolistSchema },
    ]),
  ],
})
export class TodolistsModule {}
