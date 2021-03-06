import { useRef, useState } from "react";
const Task = ({ task, handleDeleteClick }) => {
  const id = task.id;
  const title = task.title;
  const [isCompleted, setisCompleted] = useState(task.isCompleted);
  const doneButtonRef = useRef();
  const handleDoneClick = () => {
    if (doneButtonRef.current)
      doneButtonRef.current.setAttribute("disabled", "disabled");
    setisCompleted(true);
  };

  const onDeleteClick = () => {
    handleDeleteClick(id);
  };
  return (
    <div className="task">
      {isCompleted ? (
        <div className="task-title" style={{ textDecoration: "line-through" }}>
          {title}
        </div>
      ) : (
        <div className="task-title">{title}</div>
      )}

      <button
        className="btn done-btn"
        ref={doneButtonRef}
        onClick={handleDoneClick}
      >
        Done
      </button>
      <button className="btn delete-btn" onClick={onDeleteClick}>
        Delete
      </button>
    </div>
  );
};
export default Task;
