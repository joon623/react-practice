import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from '../../store/todoList';
import TodoItem from './todoItem';
import TodoItemCreator from './todoListCreater';
import TodoListFilters from './todoListFilters';
import TodoListStats from './todoListStats';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  console.log(todoList);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
