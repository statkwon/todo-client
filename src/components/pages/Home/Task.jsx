import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/common/TextField.jsx';
import { taskDate } from 'utils/taskDate.js';
import 'assets/styles/Task.scss';

const Task = ({ task, updateTask, removeTask }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const changeHandler = () => updateTask(task.id, task.content, !task.isDone);
  const contentClickHandler = () => {
    if (!task.isDone) setIsUpdate(true);
  };
  const taskSubmitHandler = evt => {
    updateTask(task.id, evt.target.elements[0].value, task.isDone);
    setIsUpdate(false);
  };
  const deleteBtnClickHandler = () => removeTask(task.id);
  const taskDiv = !isUpdate ? (
    <>
      <input
        className="task-checkbox"
        type="checkbox"
        checked={task.isDone}
        onChange={changeHandler}
      ></input>
      <div className="task-content" onClick={contentClickHandler}>
        <div className={task.isDone ? 'task-content-done' : 'task-content'}>{task.content}</div>
        <div className="task-content-date">{taskDate(task.modifiedDate)}</div>
      </div>
      <button className="task-delete-btn" onClick={deleteBtnClickHandler}></button>
    </>
  ) : (
    <TextField value={task.content} customSubmitHandler={taskSubmitHandler} />
  );

  return <div className={isUpdate ? 'task-update' : 'task'}>{taskDiv}</div>;
};

Task.propTypes = {
  task: PropTypes.object,
  updateTask: PropTypes.func,
  removeTask: PropTypes.func,
};

export default Task;
