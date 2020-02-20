import {Entity, model, property, hasOne} from '@loopback/repository';
import {TodoList} from './todo-list.model';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasOne(() => TodoList)
  todoList: TodoList;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
