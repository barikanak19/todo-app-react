import React, { useState } from 'react';
import './TaskInput.css';

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim() === '') return;
    onAddTask(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="task-input"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="btn btn-primary" onClick={handleSubmit}>
        <span>+ Add Task</span>
      </button>
    </div>
  );
}

export default TaskInput;