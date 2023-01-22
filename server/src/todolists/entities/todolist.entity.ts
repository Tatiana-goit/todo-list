import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop()
  text: string;

  @Prop()
  isDone: boolean;

  @Prop()
  createdDate: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

@Schema()
export class TodoList extends Document {
  @Prop()
  name: string;

  @Prop({ type: [TodoSchema], default: [] })
  todos: Todo[];
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList);
