import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodolistDocument = Todolist & Document;
@Schema
export class Todolist {
  @Prop()
  title: string;

  @Prop()
  data: string;
}

export const TodolistSchema = SchemaFactory.createForClass(Todolist);
