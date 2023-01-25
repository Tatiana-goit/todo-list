import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { PaginationQueryDto } from './common/pagination-query.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';

@Controller('todolists')
export class TodolistsController {
  constructor(private readonly todoListsService: TodolistsService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.todoListsService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoListsService.findOne(id);
  }

  @Post()
  create(@Body() createTodoListDto: CreateTodolistDto) {
    return this.todoListsService.create(createTodoListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoListsService.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoListDto: UpdateTodolistDto,
  ) {
    return this.todoListsService.update(id, updateTodoListDto);
  }
}
