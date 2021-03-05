import { useState } from "react";

const TaskForm = ({ appendTaskToList }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    appendTaskToList({ id: new Date().getUTCMilliseconds(), title: taskTitle });
    setTaskTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        />
        <button type="submit">
          <span>+</span>
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
