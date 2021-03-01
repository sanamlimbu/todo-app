import Task from "./Task";

const TaskList = ({ taskList }) => {
  taskList = taskList.map((task) => <Task key={task.id} title={task.title} />);
  return (
    <div className="container" align="center">
      <ul className="list-group">{taskList}</ul>
    </div>
  );
};
export default TaskList;
