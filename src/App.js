import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addTaskToList = (task) => {
    setTaskList((oldList) => [...oldList, task]);
  };
  const handleDeleteClick = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <div className="main">
      <Header totalTasks={taskList.length} />
      <TaskForm addTaskToList={addTaskToList} />
      <TaskList taskList={taskList} handleDeleteClick={handleDeleteClick} />
    </div>
  );
};

export default App;
