import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';
import { addTodoToFirestore } from '../../firebase/firestore';
import './AddTodoForm.scss'; // Ensure you have this SCSS file for styling


const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTodoId = await addTodoToFirestore({ title, completed: false });
    // Optionally, update Redux store if you are using it alongside Firebase
    dispatch(addTodo({ id: newTodoId, title, completed: false }));
    setTitle('');
  };

  return (
    <div>
    <h1 className='todo-tile'>Todo List</h1>
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
    </div>
  );
};

export default AddTodoForm;
