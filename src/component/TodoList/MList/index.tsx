import React, { FC, ReactElement } from 'react';
import { ITodo } from '../typing';
import MItem from './item';

interface IProps {
  todoList: ITodo[],
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const MList: FC<IProps> = ({
  todoList,
  toggleTodo,
  removeTodo
}): ReactElement => {
  return (
    <div>
      {
        todoList && todoList.map((todo: ITodo) => {
          return (
            <MItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          )
        })
      }

    </div>
  )
}

export default MList;