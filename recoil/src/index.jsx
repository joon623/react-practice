import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './App.css';
import TodoList from './components/TodoList/todoList';
import { RecoilRoot } from 'recoil';

const root = createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>,
);
