import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const appendTaskToList = (task) => {
    setTaskList((oldList) => [...oldList, task]);
  };
  return (
    <div className="container">
      <TaskForm appendTaskToList={appendTaskToList} />
      <TaskList taskList={taskList} />
    </div>
  );
};

export default App;
