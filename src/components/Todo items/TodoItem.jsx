import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../../redux/todosSlice';
import './TodoItem.scss'; // Ensure you have this SCSS file for styling
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    const newTitle = prompt('Edit Todo', todo.title);
    if (newTitle) {
      dispatch(editTodo({ ...todo, title: newTitle }));
    }
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };
  TodoItem.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  };
  return (
    <div className="todo-item">
      <input 
        className="todo-checkbox"
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleToggle} 
      />
      <span className={`todo-title ${todo.completed ? 'completed' : ''}`}>
        {todo.title}
      </span>
      <button className="edit-button" onClick={handleEdit}>Edit</button>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
