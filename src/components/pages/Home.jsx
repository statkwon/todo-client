import React from 'react';
import 'assets/styles/Home.scss';
import PropTypes from 'prop-types';
import TextField from 'components/common/TextField.jsx';
import NoTask from 'components/pages/Home/NoTask.jsx';
import TaskList from 'components/pages/Home/TaskList.jsx';

const Home = ({ placeholder, tasks, customSubmitHandler, updateTask }) => {
  const userName = sessionStorage.getItem('name');

  return (
    <div className="home">
      <div className="home-text">
        <div className="home-text-m">Good afternoon, {userName}.</div>
        <div className="home-text-m">You&apos;ve got</div>
        <div className="home-text-l">0 / {tasks.length}</div>
        <div className="home-text-m">tasks Today!</div>
        <TextField placeholder={placeholder} customSubmitHandler={customSubmitHandler} />
      </div>
      {tasks.length ? <TaskList tasks={tasks} updateTask={updateTask} /> : <NoTask />}
    </div>
  );
};

Home.propTypes = {
  placeholder: PropTypes.string,
  tasks: PropTypes.array,
  customSubmitHandler: PropTypes.func,
  updateTask: PropTypes.func,
};

export default Home;
