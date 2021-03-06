import Task from "./Task";

const TaskList = ({ taskList, handleDeleteClick }) => {
  taskList = taskList.map((task) => (
    <Task key={task.id} task={task} handleDeleteClick={handleDeleteClick} />
  ));
  return <div className="container">{taskList}</div>;
};
export default TaskList;
