import React from 'react';
import 'assets/styles/Home.scss';
import PropTypes from 'prop-types';
import TextField from 'components/common/TextField.jsx';
import NoTask from 'components/pages/Home/NoTask.jsx';
import TaskList from 'components/pages/Home/TaskList.jsx';
import { greeting } from '../../../utils/greeting';

const Home = ({
  placeholder,
  tasks,
  left,
  customSubmitHandler,
  updateTask,
  removeTask,
  removeTasks,
}) => {
  const userName = sessionStorage.getItem('name');

  return (
    <div className="home">
      <div className="home-text">
        <div className="home-text-m">
          Good {greeting()}, {userName}.
        </div>
        <div className="home-text-m">You&apos;ve got</div>
        <div className="home-text-l">
          {left} / {tasks.length}
        </div>
        <div className="home-text-m">tasks Today!</div>
        <TextField placeholder={placeholder} customSubmitHandler={customSubmitHandler} />
      </div>
      {tasks.length ? (
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          removeTask={removeTask}
          removeTasks={removeTasks}
        />
      ) : (
        <NoTask />
      )}
    </div>
  );
};

Home.propTypes = {
  placeholder: PropTypes.string,
  tasks: PropTypes.array,
  left: PropTypes.number,
  customSubmitHandler: PropTypes.func,
  updateTask: PropTypes.func,
  removeTask: PropTypes.func,
  removeTasks: PropTypes.func,
};

export default Home;
