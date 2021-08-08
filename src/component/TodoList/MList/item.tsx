import React, { FC, ReactElement } from 'react';
import { ITodo } from '../typing';

interface IProps {
  todo: ITodo,
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
const MItem: FC<IProps> = ({
  todo,
  toggleTodo,
  removeTodo
}): ReactElement => {
  const { id, complete, content } = todo;
  return (
    <div>
      <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
      <span style={{ color: complete ? 'red' : 'gray' }}>{content}</span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  )
}

export default MItem;