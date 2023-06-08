import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from 'components/common/Header.jsx';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import { get, post } from 'apis/httpActions.js';
import 'App.scss';

function App() {
  const navigate = useNavigate();
  const logoClickHandler = () => navigate('/');
  const loginPlaceholder = 'Input your name';
  const homePlaceholder = 'Enter your task';
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTasks();
  }, []);

  const changeHandler = evt => {
    if (evt.target.value.trim() !== '') setIsFilled(true);
    else setIsFilled(false);
  };
  const focusHandler = evt => {
    evt.target.placeholder = '';
    setIsFocused(true);
  };
  const blurHandler = (evt, placeholder) => {
    evt.target.placeholder = placeholder;
    setIsFocused(false);
  };
  const deleteBtnClickHandler = () => {
    inputRef.current.value = '';
    setIsFilled(false);
    inputRef.current.focus();
  };
  const loginSubmitHandler = evt => {
    evt.preventDefault();
    if (inputRef.current.value.trim() !== '') {
      sessionStorage.setItem('name', inputRef.current.value);
      inputRef.current.value = '';
      setIsFilled(false);
      inputRef.current.blur();
      navigate('/Home');
    }
  };
  const loginSubmitBtnClickHandler = evt => loginSubmitHandler(evt);
  const homeSubmitHandler = evt => {
    evt.preventDefault();
    if (inputRef.current.value.trim() !== '') {
      createTask(inputRef.current.value);
      inputRef.current.value = '';
      setIsFilled(false);
    }
  };
  const homeSubmitBtnClickHandler = evt => homeSubmitHandler(evt);
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

  return (
    <div className="App">
      <Header logoClickHandler={logoClickHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <Login
              border={true}
              placeholder={loginPlaceholder}
              isFilled={isFilled}
              isFocused={isFocused}
              formRef={formRef}
              inputRef={inputRef}
              changeHandler={changeHandler}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              deleteBtnClickHandler={deleteBtnClickHandler}
              submitHandler={loginSubmitHandler}
              submitBtnClickHandler={loginSubmitBtnClickHandler}
            />
          }
        />
        <Route
          path="/Home"
          element={
            <Home
              border={true}
              placeholder={homePlaceholder}
              isFilled={isFilled}
              isFocused={isFocused}
              inputRef={inputRef}
              changeHandler={changeHandler}
              focusHandler={focusHandler}
              blurHandler={blurHandler}
              deleteBtnClickHandler={deleteBtnClickHandler}
              submitHandler={homeSubmitHandler}
              submitBtnClickHandler={homeSubmitBtnClickHandler}
              tasks={tasks}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
