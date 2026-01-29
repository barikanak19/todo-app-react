import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import TaskInput from './Components/TaskInput';
import FilterButtons from './Components/FilterButtons';
import Statistics from './Components/Statistics';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks);
        setTasks(parsed);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('todoTasks', JSON.stringify(tasks));
    } else {
      localStorage.removeItem('todoTasks');
    }
  }, [tasks]);

  // Add new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toLocaleString()
    };

    setTasks([newTask, ...tasks]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Update task text
  const updateTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText.trim() } : task
    ));
  };

  // Filter tasks
  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  // Calculate statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;

  const filteredTasks = getFilteredTasks();

  return (
    <div className="app-container">
      <Header />
      
      <div className="main-card">
        <div className="input-section">
          <TaskInput onAddTask={addTask} />
          
          <FilterButtons 
            currentFilter={filter} 
            onFilterChange={setFilter} 
          />
          
          <Statistics 
            total={totalTasks}
            pending={pendingTasks}
            completed={completedTasks}
          />
        </div>

        <TaskList
          tasks={filteredTasks}
          filter={filter}
          onToggleComplete={toggleComplete}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;