import Task from "./Task";

const TaskList = ({ taskList }) => {
  taskList = taskList.map((task) => <Task key={task.id} title={task.title} />);
  return (
    <div className="tasklist">
      <div>{taskList}</div>
    </div>
  );
};
export default TaskList;
