import React, { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggleComplete, onDeleteTask, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditText(task.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim() === '') return;
    onUpdateTask(task.id, editText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(task.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div
      className={`task-item ${task.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}
    >
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
      </div>

      <div className="task-content">
        {isEditing ? (
          <input
            type="text"
            className="task-edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            autoFocus
          />
        ) : (
          <>
            <div className="task-text">{task.text}</div>
            <div className="task-timestamp">{task.createdAt}</div>
          </>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button
              className="btn-icon btn-save"
              onClick={handleSaveEdit}
              title="Save"
            >
              ✓
            </button>
            <button
              className="btn-icon btn-cancel"
              onClick={handleCancelEdit}
              title="Cancel"
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <button
              className="btn-icon btn-edit"
              onClick={handleStartEdit}
              title="Edit"
            >
              ✎
            </button>
            <button
              className="btn-icon btn-delete"
              onClick={() => onDeleteTask(task.id)}
              title="Delete"
            >
              🗑
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;