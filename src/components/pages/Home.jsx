import React from 'react';
import 'assets/styles/Home.scss';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';

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
  } = props;

  return (
    <div className="home">
      <div className="home-text-m">Good afternoon, Lily.</div>
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
      />
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
};

export default Home;
