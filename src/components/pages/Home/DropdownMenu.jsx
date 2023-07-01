import React from 'react';
import Dropdown from 'react-dropdown';
import 'assets/styles/DropdownMenu.scss';
import icArrowDown from 'assets/images/ic_arrow_down.png';
import icArrowUp from 'assets/images/ic_arrow_up.png';
import PropTypes from 'prop-types';

const DropdownMenu = ({ option, dropdownChangeHandler }) => {
  const options = [
    { value: 'Oldest', label: 'Oldest', className: 'option' },
    { value: 'Latest', label: 'Latest', className: 'option' },
  ];

  return (
    <Dropdown
      options={options}
      value={option}
      onChange={dropdownChangeHandler}
      className="root"
      controlClassName="control"
      arrowClosed={<img className="arrow-closed" src={icArrowDown} alt="ic_arrow_donw.png" />}
      arrowOpen={<img className="arrow-open" src={icArrowUp} alt="ic_arrow_up.png" />}
    />
  );
};

DropdownMenu.propTypes = {
  option: PropTypes.string,
  dropdownChangeHandler: PropTypes.func,
};

export default DropdownMenu;
