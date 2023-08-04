import { useState } from "react";

const ListItem = ({ task, onRemoveTask, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedTask(task);
  };

  const handleSaveEdit = () => {
    onEditTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save Task</button>
          <button onClick={handleCancelEdit}>Cancel Task</button>
        </div>
      ) : (
        <div>
          <span>{task}</span>
          <button onClick={handleEdit}>Edit Task</button>
          <button onClick={onRemoveTask}>Delete Task</button>
        </div>
      )}
    </div>
  );
};

export default ListItem;