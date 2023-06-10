import React from 'react';
import PropTypes from 'prop-types';
import Task from 'components/pages/Home/Task.jsx';
import 'assets/styles/TaskList.scss';

const TaskList = props => {
  const { tasks } = props;

  return (
    <div className="tasklist">
      <div className="tasklist-items">
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
