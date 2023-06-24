import React from 'react';
import PropTypes from 'prop-types';
import Task from 'components/pages/Home/Task.jsx';
import 'assets/styles/TaskList.scss';

const TaskList = ({ tasks, updateTask }) => {
  return (
    <div className="tasklist">
      <div className="tasklist-items">
        {tasks.map(task => (
          <Task key={task.id} task={task} updateTask={updateTask} />
        ))}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  updateTask: PropTypes.func,
};

export default TaskList;
