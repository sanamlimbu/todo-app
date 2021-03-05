const Task = ({ title, ...rest }) => {
  return <div className="task">{title}</div>;
};

export default Task;
