// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import AddTodoForm from './components/Todo form/AddTodoForm';
import TodoItem from './components/Todo items/TodoItem';
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <Router>
      <div>
        <AddTodoForm />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </Router>
  );
}

export default App;
