export interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

export interface IState {
  todoList: ITodo[]
}

export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo',
  INIT_TODO = 'initTodo'
}

export interface IAction {
  type: ACTION_TYPE,
  payload: number | ITodo | ITodo[],
}