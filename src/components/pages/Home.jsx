import React from 'react';
import 'assets/styles/Home.scss';
import PropTypes from 'prop-types';
import TextField from 'components/common/TextField.jsx';
import NoTask from 'components/pages/Home/NoTask.jsx';

const Home = props => {
  const {
    border,
    placeholder,
    isFilled,
    isFocused,
    inputRef,
    changeHandler,
    focusHandler,
    blurHandler,
    deleteBtnClickHandler,
    submitHandler,
    submitBtnClickHandler,
  } = props;
  const userName = sessionStorage.getItem('name');

  return (
    <div className="home">
      <div className="home-text">
        <div className="home-text-m">Good afternoon, {userName}.</div>
        <div className="home-text-m">You&apos;ve got</div>
        <div className="home-text-l">2 / 2</div>
        <div className="home-text-m">tasks Today!</div>
        <TextField
          border={border}
          placeholder={placeholder}
          isFilled={isFilled}
          isFocused={isFocused}
          inputRef={inputRef}
          changeHandler={changeHandler}
          focusHandler={focusHandler}
          blurHandler={blurHandler}
          deleteBtnClickHandler={deleteBtnClickHandler}
          submitHandler={submitHandler}
          submitBtnClickHandler={submitBtnClickHandler}
        />
      </div>
      <NoTask />
    </div>
  );
};

Home.propTypes = {
  border: PropTypes.bool,
  placeholder: PropTypes.string,
  isFilled: PropTypes.bool,
  isFocused: PropTypes.bool,
  inputRef: PropTypes.object,
  changeHandler: PropTypes.func,
  focusHandler: PropTypes.func,
  blurHandler: PropTypes.func,
  deleteBtnClickHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  submitBtnClickHandler: PropTypes.func,
};

export default Home;
