import React from "react";
import PropTypes, { bool } from "prop-types";

import styles from "./index.module.scss";

const Input = ({ type, name, placeholder, value, checked, onChange }) => (
  <>
    <input
      className={styles}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  </>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: bool,
  onChange: PropTypes.func.isRequired,
};

export default Input;
