// import { PartialType } from '@nestjs/mapped-types';
// import { CreateTodolistDto } from './create-todolist.dto';

// export class UpdateTodolistDto extends PartialType(CreateTodolistDto) {}

import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodolistDto {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => CreateTodoDto)
  todos: CreateTodoDto[];
}
