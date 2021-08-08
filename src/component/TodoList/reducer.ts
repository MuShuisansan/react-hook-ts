import { IState, IAction, ACTION_TYPE, ITodo } from './typing/index';
function todoReducer(state: IState, action: IAction): IState {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.INIT_TODO:

      return {
        ...state,
        todoList: payload as ITodo[]
      }

    case ACTION_TYPE.ADD_TODO:

      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo]
      }

    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== payload)
      }
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          return todo.id === payload ? {
            ...todo,
            complete: !todo.complete
          } : {
            ...todo
          }
        })
      }
    default:
      return {
        ...state
      }
  }

}

export {
  todoReducer
}