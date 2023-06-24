import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/common/TextField.jsx';
import { taskDate } from 'utils/taskDate.js';
import 'assets/styles/Task.scss';

const Task = ({ task, updateTask }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const clickHandler = () => setIsUpdate(true);
  const taskSubmitHandler = evt => {
    updateTask(task.id, evt.target.elements[0].value, task.isDone);
    setIsUpdate(false);
  };
  const taskDiv = !isUpdate ? (
    <>
      <input className="task-checkbox" type="checkbox"></input>
      <div className="task-content" onClick={clickHandler}>
        {task.content}
        <div className="task-content-date">{taskDate(task.modifiedDate)}</div>
      </div>
      <button className="task-delete-btn"></button>
    </>
  ) : (
    <TextField value={task.content} customSubmitHandler={taskSubmitHandler} />
  );

  return <div className={isUpdate ? 'task-update' : 'task'}>{taskDiv}</div>;
};

Task.propTypes = {
  task: PropTypes.object,
  updateTask: PropTypes.func,
};

export default Task;
