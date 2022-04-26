import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../store/todoList';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((lastList) => {
      return [
        ...lastList,
        { id: getId(), text: inputValue, isComplete: false },
      ];
    });
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </form>
  );
};

// 고유한 Id 생성을 위한 유틸리티
let id = 0;

function getId() {
  return id++;
}

export default TodoItemCreator;
