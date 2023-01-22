import { Controller, Get, Param } from '@nestjs/common';
import { TodolistsService } from './todolists.service';

@Controller('todolists')
export class TodolistsController {
  constructor(private readonly todoListsService: TodolistsService) {}

  @Get()
  findAll() {
    return this.todoListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoListsService.findOne(id);
  }
}
// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   HttpCode,
//   HttpStatus,
//   Param,
//   Post,
//   Put,
//   // Redirect,
//   Header,
// } from '@nestjs/common';
// import { CreateTodolistsDto } from './dto/create-todolist.dto/create-todolists.dto';
// import { UpdateTodolistsDto } from './dto/update-todolists.dto';
// import { Todolist } from './schemas/todolists.schemas';
// import { TodolistsService } from './todolists.service';

// @Controller('todolists')
// export class TodolistsController {
//   constructor(private readonly todolistsService: TodolistsService) {}
//   @Get()
//   getAll(): Promise<Todolist[]> {
//     return this.todolistsService.getAll();
//   }
//   // @Get()
//   // @Redirect('https://google.com', 301)
//   // getAll(): string {
//   //   return 'getAll';
//   // }

//   @Get(':id')
//   getOne(@Param('id') id: string): Promise<Todolist> {
//     return this.todolistsService.getById(id);
//   }
//   // @Get(':id')
//   // getOne(@Param('id') id: string) {
//   //   return 'getOne ' + id;
//   // }

//   @Post()
//   @HttpCode(HttpStatus.CREATED)
//   @Header('Cache-Control', 'none')
//   create(@Body() createTodolistsDto: CreateTodolistsDto): Promise<Todolist> {
//     return this.todolistsService.create(createTodolistsDto);
//   }

//   // @Post()
//   // @HttpCode(HttpStatus.CREATED)
//   // @Header('Cache-Control', 'none')
//   // create(@Body() createTodolistsDto: CreateTodolistsDto): string {
//   //   return `Title: ${createTodolistsDto.title} data: ${createTodolistsDto.data}`;
//   // }

//   @Delete('id')
//   remove(@Param('id') id: string): Promise<Todolist> {
//     return this.todolistsService.remove(id);
//   }

//   @Put('id')
//   update(
//     @Body() updateTodolistsDto: UpdateTodolistsDto,
//     @Param('id') id: string,
//   ): Promise<Todolist> {
//     return this.todolistsService.update(id, updateTodolistsDto);
//   }
// }
