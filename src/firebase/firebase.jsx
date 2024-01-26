// firebase.jsx
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrYGXIyCCoUcY4hUG8_GctZJKEoLmQ54U",
    authDomain: "redstar-test-040.firebaseapp.com",
    projectId: "redstar-test-040",
    storageBucket: "redstar-test-040.appspot.com",
    messagingSenderId: "190038581269",
    appId: "1:190038581269:web:a0636a3d9820b40887ee1c",
    measurementId: "G-KB3ZV829RT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const addTodoToFirestore = async (todo) => {
    const docRef = await addDoc(collection(db, 'todos'), todo);
    return docRef.id;
};

export { db, auth };



