import React from "react";

import styles from "./index.module.scss";

const Button = ({ disabled }) => (
  <button className={styles} disabled={disabled}>
    Надіслати
  </button>
);

export default Button;
