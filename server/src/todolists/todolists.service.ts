import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoList } from './entities/todolist.entity';

@Injectable()
export class TodolistsService {
  constructor(
    @InjectModel(TodoList.name) private readonly todoListModel: Model<TodoList>,
  ) {}
  async findAll() {
    const todoLists = await this.todoListModel.find().exec();
    return todoLists;
  }

  async findOne(id: string) {
    const todoList = await this.todoListModel.findOne({ _id: id }).exec();
    if (!todoList) {
      throw new NotFoundException(`Todolist #${id} not found`);
    }
    return todoList;
  }
}
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import {
//   CreateTodolistsDto,
//   UpdateTodolistsDto,
// } from './dto/create-todolist.dto/create-todolists.dto';
// import { Todolist, TodolistDocument } from './schemas/todolists.schemas';

// @Injectable()
// export class TodolistsService {
//   constructor(
//     @InjectModel(Todolist.name) private todolistModel: Model<TodolistDocument>,
//   ) {}

//   async getAll(): Promise<Todolist[]> {
//     return this.todolistModel.find().exec();
//   }

//   async getById(id: string): Promise<Todolist> {
//     return this.todolistModel.findById(id);
//   }

//   async create(todolistsDto: CreateTodolistsDto): Promise<Todolist> {
//     const newTodolist = new this.todolistModel(todolistsDto);
//     return newTodolist.save();
//   }

//   async remove(id: string): Promise<Todolist> {
//     return this.todolistModel.findByIdAndRemove(id);
//   }

//   async update(
//     id: string,
//     todolistsDto: UpdateTodolistsDto,
//   ): Promise<Todolist> {
//     return this.todolistModel.findByIdAndUpdate(id, todolistsDto, {
//       new: true,
//     });
//   }
// }
