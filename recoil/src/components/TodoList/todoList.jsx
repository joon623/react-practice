import { useRecoilValue } from 'recoil';
import { todoListState } from '../../store/todoList';
import TodoItem from './todoItem';
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
