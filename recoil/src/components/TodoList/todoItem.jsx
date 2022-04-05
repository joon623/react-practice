import { useRecoilState } from 'recoil';
import { todoListState } from '../../store/todoList';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((list) => list === item);

  const editItemText = ({ target: { value } }) => {
    setTodoList([
      ...todoList.slice(0, index),
      { ...item, text: value },
      ...todoList.slice(index + 1),
    ]);
  };

  const toggleItemCompletion = () => {
    setTodoList([
      ...todoList.slice(0, index),
      {
        ...item,
        isComplete: !item.isComplete,
      },
      ...todoList.slice(index + 1),
    ]);
  };

  const deleteItem = () => {
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
