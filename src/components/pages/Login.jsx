import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/common/TextField.jsx';
import 'assets/styles/Login.scss';

const Login = props => {
  const {
    border,
    placeholder,
    isFilled,
    isFocused,
    formRef,
    inputRef,
    changeHandler,
    focusHandler,
    blurHandler,
    deleteBtnClickHandler,
    submitHandler,
    submitBtnClickHandler,
  } = props;

  return (
    <div className="login">
      <div className="login-text">
        <div className="login-text-m">
          Welcome Newbie!!! <br />
          MyTodo makes it easy to stay organized and manage your life.
        </div>
        <div className="login-text-l">What is your name?</div>
        <TextField
          border={border}
          placeholder={placeholder}
          isFilled={isFilled}
          isFocused={isFocused}
          formRef={formRef}
          inputRef={inputRef}
          changeHandler={changeHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          deleteBtnClickHandler={deleteBtnClickHandler}
          submitHandler={submitHandler}
          submitBtnClickHandler={submitBtnClickHandler}
        />
      </div>
    </div>
  );
};

Login.propTypes = {
  border: PropTypes.bool,
  placeholder: PropTypes.string,
  isFilled: PropTypes.bool,
  isFocused: PropTypes.bool,
  formRef: PropTypes.object,
  inputRef: PropTypes.object,
  changeHandler: PropTypes.func,
  focusHandler: PropTypes.func,
  blurHandler: PropTypes.func,
  deleteBtnClickHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  submitBtnClickHandler: PropTypes.func,
};

export default Login;
