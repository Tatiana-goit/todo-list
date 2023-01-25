import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoList } from './entities/todolist.entity';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { PaginationQueryDto } from './common/pagination-query.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';

@Injectable()
export class TodolistsService {
  constructor(
    @InjectModel(TodoList.name) private readonly todoListModel: Model<TodoList>,
  ) {}
  async findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    const todoLists = await this.todoListModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
    const totalCount = await this.todoListModel.countDocuments();
    return { todoLists, totalCount };
  }

  async findOne(id: string) {
    const todoList = await this.todoListModel.findOne({ _id: id }).exec();
    if (!todoList) {
      throw new NotFoundException(`Todolist #${id} not found`);
    }
    return todoList;
  }

  async create(createTodoListDto: CreateTodolistDto) {
    const todoList = new this.todoListModel(createTodoListDto);
    return await todoList.save();
  }

  async remove(id: string) {
    return await this.todoListModel.findByIdAndRemove(id);
  }

  async update(id: string, updateTodoListDto: UpdateTodolistDto) {
    const existingTodoList = this.todoListModel
      .findOneAndUpdate({ _id: id }, { $set: updateTodoListDto }, { new: true })
      .exec();
    if (!existingTodoList) {
      throw new NotFoundException(`not found todolist with this ${id}`);
    }
    return existingTodoList;
  }
}
