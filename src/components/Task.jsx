const Task = ({ title, ...rest }) => {
  return (
    <div className="container">
      <li className="list-group-item">{title}</li>
    </div>
  );
};

export default Task;
