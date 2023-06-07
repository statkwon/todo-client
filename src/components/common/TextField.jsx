import React from 'react';
import PropTypes from 'prop-types';
import 'assets/styles/TextField.scss';
import icDelete from 'assets/images/ic_delete.png';
import icSendNor from 'assets/images/ic_send_nor.png';
import icSendHov from 'assets/images/ic_send_hov.png';

const TextField = props => {
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
  const textfieldInput = border
    ? isFocused
      ? 'textfield-input-focused'
      : 'textfield-input'
    : 'textfield-input-no-border';

  return (
    <form className="textfield" ref={formRef} onSubmit={submitHandler}>
      <div className={textfieldInput}>
        <input
          placeholder={placeholder}
          ref={inputRef}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={evt => blurHandler(evt, placeholder)}
        />
        {isFilled && <img src={icDelete} alt="ic_delete.png" onClick={deleteBtnClickHandler} />}
      </div>
      <img
        src={isFilled && isFocused ? icSendHov : icSendNor}
        alt="ic_send.png"
        onClick={submitBtnClickHandler}
      />
    </form>
  );
};

TextField.propTypes = {
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

export default TextField;
