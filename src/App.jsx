import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from 'components/common/Header.jsx';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import { get, patch, post } from 'apis/httpActions.js';
import 'App.scss';

function App() {
  const navigate = useNavigate();
  const logoClickHandler = () => navigate('/');
  const loginPlaceholder = 'Input your name';
  const homePlaceholder = 'Enter your task';
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTasks();
  }, []);
  const loginSubmitHandler = evt => {
    sessionStorage.setItem('name', evt.target.elements[0].value);
    navigate('/Home');
  };
  const homeSubmitHandler = evt => createTask(evt.target.elements[0].value);
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
              customSubmitHandler={homeSubmitHandler}
              updateTask={updateTask}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
