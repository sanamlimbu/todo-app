import { useState } from "react";

const TaskForm = ({ addTaskToList }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTaskToList({
      id: new Date().getUTCMilliseconds(),
      title: taskTitle,
      isCompleted: false,
    });
    setTaskTitle("");
  };

  return (
    <div className="container">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
          className="task-input"
        />
        <button className="btn save-btn" type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
