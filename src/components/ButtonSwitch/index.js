/**
 *
 * ButtonSwitch
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function ButtonSwitch(props) {
  return (
    <div
      onClick={props.onChange}
      className={`button-switch ${props.checked ? 'active' : ''} ${
        props.disabled ? 'disabled' : ''
      }`}
    >
      <button
        type="button"
        className={`btn btn-sm btn-${props.checked ? 'success' : 'light'}`}
      />
      <label>{props.checked ? 'ON' : 'OFF'}</label>
    </div>
  );
}

ButtonSwitch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ButtonSwitch;
