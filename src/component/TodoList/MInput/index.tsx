import React, { FC, ReactElement, useRef } from 'react';
import { ITodo } from '../typing';

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[]
}

const MInput: FC<IProps> = ({
  addTodo,
  todoList
}): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (): void => {
    const val: string = inputRef.current!.value.trim();
    if (val.length) {
      const isExist = todoList.find(item => item.content === val);

      if (isExist) {
        alert('已存在');
        return
      }
      addTodo({
        id: new Date().getTime(),
        content: val,
        complete: false,
      })
      inputRef.current!.value = "";
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={addItem}>添加</button>
    </div>
  )
}

export default MInput;
