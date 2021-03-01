import { useState } from "react";

const TaskForm = ({ appendTaskToList }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    appendTaskToList({ id: new Date().getUTCMilliseconds(), title: taskTitle });
    setTaskTitle("");
  };

  return (
    <div className="container">
      <form align="center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-info">
          +
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
