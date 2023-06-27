import React from 'react';
import PropTypes from 'prop-types';
import Task from 'components/pages/Home/Task.jsx';
import 'assets/styles/TaskList.scss';
import icArrowDown from 'assets/images/ic_arrow_down.png';

const TaskList = ({ tasks, updateTask, removeTask, removeTasks }) => {
  const clearAllBtnClickHandler = () => removeTasks();

  return (
    <div className="tasklist">
      <div className="tasklist-menu">
        <div className="tasklist-menu-dropdown">
          Oldest
          <img src={icArrowDown} alt="ic_arrow_donw.png" />
        </div>
        <button className="tasklist-menu-clear-btn" onClick={clearAllBtnClickHandler}>
          Clear All
        </button>
      </div>
      <div className="tasklist-items">
        {tasks.map(task => (
          <Task key={task.id} task={task} updateTask={updateTask} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  updateTask: PropTypes.func,
  removeTask: PropTypes.func,
  removeTasks: PropTypes.func,
};

export default TaskList;
