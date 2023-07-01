import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from 'components/common/Header.jsx';
import Login from 'components/pages/Login';
import Home from 'components/pages/Home/Home';
import { deleteAll, deleteOne, get, patch, post } from 'apis/httpActions.js';
import 'App.scss';

function App() {
  const navigate = useNavigate();
  const logoClickHandler = () => navigate('/');
  const loginPlaceholder = 'Input your name';
  const homePlaceholder = 'Enter your task';
  const [tasks, setTasks] = useState([]);
  const [left, setLeft] = useState(tasks.length);
  const [option, setOption] = useState('Oldest');

  useEffect(() => {
    readTasks();
  }, []);
  useEffect(() => {
    setLeft(tasks.length);
    tasks.forEach(task => {
      if (task.isDone) setLeft(c => c - 1);
    });
  }, [tasks]);

  const loginSubmitHandler = evt => {
    sessionStorage.setItem('name', evt.target.elements[0].value);
    navigate('/Home');
  };
  const homeSubmitHandler = evt => createTask(evt.target.elements[0].value);
  const dropdownChangeHandler = evt => {
    setOption(evt.value);
    sortTasks(option);
  };

  const createTask = async content => {
    try {
      const resp = await post(content);
      setTasks(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  const readTasks = async () => {
    try {
      const resp = await get();
      setTasks(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = async (id, content, isDone) => {
    try {
      const resp = await patch(id, content, isDone);
      setTasks(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTask = async id => {
    try {
      const resp = await deleteOne(id);
      setTasks(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTasks = async () => {
    try {
      const resp = await deleteAll();
      setTasks(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  const sortTasks = option =>
    setTasks(
      tasks.sort((taskL, taskR) =>
        option === 'Oldest'
          ? new Date(taskR.modifiedDate) - new Date(taskL.modifiedDate)
          : new Date(taskL.modifiedDate) - new Date(taskR.modifiedDate),
      ),
    );

  return (
    <div className="App">
      <Header logoClickHandler={logoClickHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <Login placeholder={loginPlaceholder} customSubmitHandler={loginSubmitHandler} />
          }
        />
        <Route
          path="/Home"
          element={
            <Home
              placeholder={homePlaceholder}
              tasks={tasks}
              left={left}
              option={option}
              customSubmitHandler={homeSubmitHandler}
              dropdownChangeHandler={dropdownChangeHandler}
              updateTask={updateTask}
              removeTask={deleteTask}
              removeTasks={deleteTasks}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
