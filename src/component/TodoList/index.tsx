import React, { FC, ReactElement, useCallback, useEffect, useReducer, useState } from 'react';
import MInput from './MInput';
import MList from './MList';
import { ACTION_TYPE, IState, ITodo } from './typing';
import { todoReducer } from './reducer';

// const initTodoList: IState = {
//   todoList: []
// }

/**
 * 惰性初始化
 * @param initTodoList 
 * @returns 
 */
function init(initTodoList: ITodo[]): IState {
  return {
    todoList: initTodoList
  }
}
const TodoList: FC = (): ReactElement => {
  // const [todoList, setTodoList] = useState<ITodo[]>([]);

  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');

    dispatch({
      type: ACTION_TYPE.INIT_TODO,
      payload: todoList
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(state.todoList));
  }, [state.todoList])

  const addTodo = useCallback((todo: ITodo): void => {
    // setTodoList(todoList => [...todoList, todo])
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo
    })
  }, [])

  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id
    })
  }, [])

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id
    })
  }, [])
  return (
    <div>
      <MInput addTodo={addTodo} todoList={state.todoList} />
      <MList todoList={state.todoList} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}
export default TodoList;