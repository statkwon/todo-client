import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/common/TextField.jsx';
import 'assets/styles/Login.scss';

const Login = props => {
  const { placeholder, customSubmitHandler } = props;

  return (
    <div className="login">
      <div className="login-text">
        <div className="login-text-m">
          Welcome Newbie!!! <br />
          MyTodo makes it easy to stay organized and manage your life.
        </div>
        <div className="login-text-l">What is your name?</div>
        <TextField placeholder={placeholder} customSubmitHandler={customSubmitHandler} />
      </div>
    </div>
  );
};

Login.propTypes = {
  placeholder: PropTypes.string,
  customSubmitHandler: PropTypes.func,
};

export default Login;
