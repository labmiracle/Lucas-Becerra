const AddTaskButton = ({ onAddTask }) => {
    const handleClick = () => {
      const newTask = prompt("Enter new task");
      if (newTask && newTask.trim() !== "") {
        onAddTask(newTask);
      }
    };
  
    return <button onClick={handleClick}>Add Task</button>;
  };
  
  export default AddTaskButton;