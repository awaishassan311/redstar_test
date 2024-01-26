# React Todo App with Firebase and Redux Toolkit

## Description

This is a React-based Todo application built using Vite, featuring Firebase integration for real-time data handling and Redux Toolkit for efficient state management. The application allows users to add, edit, delete, and toggle todos, with changes synced in real-time with a Firestore database. The styling is managed with SCSS, offering a responsive and modern UI.

## Features

- Create, edit, and delete todo items.
- Toggle the completion status of todos.
- Real-time data synchronization with Firebase Firestore.
- State management with Redux Toolkit.
- Responsive design using SCSS.

## Prerequisites

- Node.js and npm (Node Package Manager).
- Firebase account for setting up Firestore.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/awaishassan311/redstar_test.git
   cd redstar_test
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Firebase Configuration:**

   - Create a Firebase project in the Firebase console.
   - Enable Firestore Database in your Firebase project.
   - Obtain Firebase configuration keys.
   - Create a `.env.local` file in the root of your project and add your Firebase keys:

     ```env
       VITE_FIREBASE_API_KEY=AIzaSyBrYGXIyCCoUcY4hUG8_GctZJKEoLmQ54U
       VITE_FIREBASE_AUTH_DOMAIN=redstar-test-040.firebaseapp.com
       VITE_FIREBASE_PROJECT_ID=redstar-test-040
       VITE_FIREBASE_STORAGE_BUCKET=redstar-test-040.appspot.com
       VITE_FIREBASE_MESSAGING_SENDER_ID=190038581269
       VITE_FIREBASE_APP_ID=1:190038581269:web:a0636a3d9820b40887ee1c
       VITE_FIREBASE_MEASUREMENT_ID=G-KB3ZV829RT

     ```

4. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```
4. **The project is deployed on vercel:**
  ```bash
  https://redstar-test-todolist-firebase.vercel.app/
   ```

## Usage

Navigate to the URL provided by Vite (usually `http://localhost:3000`) to view and interact with the Todo application.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

[MIT License](LICENSE.md)

---

### Additional Notes:


- Ensure that the Firebase keys in the `.env.local` file are kept confidential and not committed to your repository.
- If you have specific instructions for testing or additional features, include them in the README.
- Tailor the Contributing section based on how open you are to contributions and the process you prefer.

This README template provides a comprehensive guide for anyone who wants to use or contribute to your project.