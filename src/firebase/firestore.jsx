import { db } from './firebase'; // Import `db`, not `firestore`
import { collection, addDoc, getDocs } from 'firebase/firestore';
export const addTodo = async (todo) => {
  const docRef = await addDoc(collection(db, 'todos'), todo);
  return docRef.id;
};
export const addTodoToFirestore = async (todo) => {
  const docRef = await addDoc(collection(db, 'todos'), todo);
  return docRef.id; // This returns the new document's ID
};

export const getTodos = async () => {
  const snapshot = await getDocs(collection(db, 'todos'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};