import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import 'assets/styles/TextField.scss';
import icDelete from 'assets/images/ic_delete.png';
import icSendNor from 'assets/images/ic_send_nor.png';
import icSendHov from 'assets/images/ic_send_hov.png';
import styled from 'styled-components';

const StyledBtn = styled.button.attrs(props => ({
  type: props.type,
}))`
  width: ${props => props.size};
  height: ${props => props.size};
  padding: 0;
  border: none;
  background-color: transparent;
  background-image: url(${props => props.src});
`;

const TextField = ({ value, placeholder, customSubmitHandler }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const formRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (value) {
      inputRef.current.value = value;
      setIsFilled(true);
      inputRef.current.focus();
    }
  }, []);
  const changeHandler = evt => (evt.target.value.trim() ? setIsFilled(true) : setIsFilled(false));
  const focusHandler = evt => {
    evt.target.placeholder = '';
    setIsFocused(true);
  };
  const blurHandler = evt => {
    evt.target.placeholder = placeholder;
    setIsFocused(false);
  };
  const submitHandler = evt => {
    evt.preventDefault();
    if (inputRef.current.value.trim() !== '' && inputRef.current.value.trim() !== value) {
      customSubmitHandler(evt);
      inputRef.current.value = '';
      setIsFilled(false);
      inputRef.current.blur();
    }
  };
  const deleteBtnClickHandler = () => {
    inputRef.current.value = '';
    setIsFilled(false);
    inputRef.current.focus();
  };

  const textfieldInput = value
    ? 'textfield-input-no-border'
    : isFocused
    ? 'textfield-input-focused'
    : 'textfield-input';

  return (
    <form className="textfield" ref={formRef} onSubmit={submitHandler}>
      <div className={textfieldInput}>
        <input
          placeholder={placeholder}
          ref={inputRef}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        {!value && isFilled && (
          <StyledBtn type="button" size="20px" src={icDelete} onClick={deleteBtnClickHandler} />
        )}
      </div>
      <StyledBtn type="submit" size="24px" src={isFilled && isFocused ? icSendHov : icSendNor} />
    </form>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  customSubmitHandler: PropTypes.func,
};

export default TextField;
