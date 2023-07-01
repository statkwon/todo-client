import React from 'react';
import PropTypes from 'prop-types';
import Task from 'components/pages/Home/Task.jsx';
import 'assets/styles/TaskList.scss';
import DropdownMenu from './DropdownMenu';

const TaskList = ({
  tasks,
  option,
  dropdownChangeHandler,
  updateTask,
  removeTask,
  removeTasks,
}) => {
  const clearAllBtnClickHandler = () => removeTasks();

  return (
    <div className="tasklist">
      <div className="tasklist-menu">
        <DropdownMenu option={option} dropdownChangeHandler={dropdownChangeHandler} />
        <div></div>
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
  option: PropTypes.string,
  dropdownChangeHandler: PropTypes.func,
  updateTask: PropTypes.func,
  removeTask: PropTypes.func,
  removeTasks: PropTypes.func,
};

export default TaskList;
