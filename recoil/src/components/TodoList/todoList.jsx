import { RecoilRoot, useRecoilValue } from 'recoil';
import { todoListState } from '../../store/todoList';
import TodoItem from './todoItem';
import { useId } from 'react';
import TodoItemCreator from './todoListCreater';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
