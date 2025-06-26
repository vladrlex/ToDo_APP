import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2508;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const deleteTodos = (id: number) => {
  return client.delete(`/todos/${id}`);
};

export const addTodo = (data: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos`, data);
};

export const patchTodo = (id: number, data: Partial<Todo>) =>
  client.patch<Todo>(`/todos/${id}`, data);
