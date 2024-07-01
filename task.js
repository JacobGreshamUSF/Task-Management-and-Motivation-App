//U59555732
// src/data/tasks.js
const tasks = [
  { id: 1, name: "Complete the React challenge", isCompleted: false },
  { id: 2, name: "Read a chapter of a book", isCompleted: false },
  { id: 3, name: "Exercise for 30 minutes", isCompleted: false },
  // Add more tasks as needed
];

export default tasks;
// src/components/FancyText.js
import React from 'react';
import './FancyText.css'; // Create and import CSS for styling

function FancyText({ title, text }) {
  return (
    <div className={title ? 'fancy-title' : 'fancy-text'}>
      {text}
    </div>
  );
}

export default FancyText;
// src/components/TaskGenerator.js
import React, { useState } from 'react';
import tasks from '../data/tasks';
import FancyText from './FancyText';

const motivationalMessages = [
  "Keep pushing forward!",
  "You can do it!",
  "Believe in yourself!",
  "Stay positive and work hard!",
];

function TaskGenerator() {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const toggleTaskCompletion = (taskId) => {
    tasks[taskId - 1].isCompleted = !tasks[taskId - 1].isCompleted;
    setCurrentTaskIndex((prevIndex) => prevIndex); // Trigger re-render
  };

  const currentTask = tasks[currentTaskIndex];
  const motivationalMessage = motivationalMessages[currentTaskIndex % motivationalMessages.length];

  return (
    <div>
      <FancyText title text="Task for Today" />
      <p>{currentTask.name}</p>
      <p>Status: {currentTask.isCompleted ? 'Completed ✔' : 'Pending'}</p>
      <button onClick={() => toggleTaskCompletion(currentTask.id)}>
        {currentTask.isCompleted ? 'Mark as Pending' : 'Mark as Completed'}
      </button>
      <button onClick={nextTask}>Next Task</button>
      <FancyText text={motivationalMessage} />
    </div>
  );
}

export default TaskGenerator;
// src/App.js
import React from 'react';
import FancyText from './components/FancyText';
import TaskGenerator from './components/TaskGenerator';
import './App.css'; // Create and import CSS for styling

function App() {
  return (
    <div className="App">
      <FancyText title text="Task Management and Motivation App" />
      <TaskGenerator />
      <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
