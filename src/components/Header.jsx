const Header = ({ totalTasks }) => {
  return (
    <div className="container">
      <span className="app-title">Todo App</span>

      {totalTasks === 0 ? null : (
        <span className="total-task">You have {totalTasks} todos.</span>
      )}
    </div>
  );
};

export default Header;
