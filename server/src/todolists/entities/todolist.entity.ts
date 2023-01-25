import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { DateTime } from 'luxon';

@Schema()
export class Todo extends Document {
  @Prop()
  text: string;

  @Prop()
  @Prop({ default: false })
  isDone: boolean;

  @Prop()
  // @Prop({ default: DateTime.now().toISO() })
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
