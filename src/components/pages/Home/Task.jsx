import React from 'react';
import PropTypes from 'prop-types';
import { taskDate } from 'utils/taskDate.js';
import 'assets/styles/Task.scss';

const Task = props => {
  const { task } = props;

  return (
    <div className="task">
      <div className="task-left">
        <input className="task-left-checkbox" type="checkbox"></input>
        <div>{task.content}</div>
      </div>
      <div className="task-right">
        <div>{taskDate(task.modifiedDate)}</div>
        <button className="task-right-delete-btn"></button>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
