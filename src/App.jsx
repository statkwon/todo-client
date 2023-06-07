import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'App.scss';
import Header from 'components/common/Header.jsx';
import TextField from 'components/common/TextField';

function App() {
  const navigate = useNavigate();
  const logoClickHandler = () => navigate('/');
  const loginPlaceholder = 'Hint text';
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

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

  return (
    <div className="App">
      <Header logoClickHandler={logoClickHandler} />
      <TextField
        border={true}
        placeholder={loginPlaceholder}
        isFilled={isFilled}
        isFocused={isFocused}
        inputRef={inputRef}
        changeHandler={changeHandler}
        focusHandler={focusHandler}
        blurHandler={blurHandler}
        deleteBtnClickHandler={deleteBtnClickHandler}
      />
    </div>
  );
}

export default App;
