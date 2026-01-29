import React from 'react';
import './TaskList.css';
import TaskItem from './TaskItem';

function TaskList({ tasks, filter, onToggleComplete, onDeleteTask, onUpdateTask }) {
  const getEmptyStateContent = () => {
    switch (filter) {
      case 'completed':
        return {
          icon: '🎉',
          text: 'No completed tasks yet',
          subtext: ''
        };
      case 'pending':
        return {
          icon: '📝',
          text: 'No pending tasks',
          subtext: ''
        };
      default:
        return {
          icon: '✨',
          text: 'No tasks yet',
          subtext: 'Add your first task to get started!'
        };
    }
  };

  if (tasks.length === 0) {
    const emptyState = getEmptyStateContent();
    return (
      <div className="tasks-section">
        <div className="empty-state">
          <div className="empty-state-icon">{emptyState.icon}</div>
          <div className="empty-state-text">{emptyState.text}</div>
          {emptyState.subtext && (
            <div className="empty-state-subtext">{emptyState.subtext}</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="tasks-section">
      <div className="tasks-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;