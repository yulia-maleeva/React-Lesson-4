import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

import styles from "./index.module.scss";

const Form = ({ handleSubmit }) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [checked, setChecked] = useState(false);

  const validateEmail = (emailValue) => {
    return /\S+@\S+\.\S+/.test(emailValue);
  };

  const validateMobile = (mobileValue) => {
    return /^\+380\d{3}\d{2}\d{2}\d{2}$/.test(mobileValue);
  };

  const handleError = (e) => {
    if (e.target.name === "name" && e.target.value.length < 4) {
      return setNameError("Юзернейм повинен містити мінімум 4 символи");
    }
    if (e.target.name === "email" && !validateEmail(e.target.value)) {
      return setEmailError("Неправильна адреса електронної пошти");
    }
    if (e.target.name === "mobile" && !validateMobile(e.target.value)) {
      return setMobileError("Перевір формат номеру телефона");
    }
    if (e.target.name === "message" && e.target.value.length < 10) {
      return setMessageError("Повідомлення має бути не менше 10 символів");
    }

    setNameError("");
    setEmailError("");
    setMobileError("");
    setMessageError("");
  };

  const handleChange = (e) => {
    handleError(e);
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return (
      !nameError &&
      !emailError &&
      !mobileError &&
      !messageError &&
      student.name.length &&
      student.email.length &&
      student.mobile.length &&
      student.message.length &&
      checked
    );
  };

  return (
    <form className={styles} onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Ім'я та прізвище"
          value={student.name}
          onChange={handleChange}
        />
        {nameError && <p className={styles.error}>{nameError}</p>}
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />
        {emailError && <p className={styles.error}>{emailError}</p>}
      </div>
      <div>
        <Input
          type="tel"
          name="mobile"
          placeholder="Телефон (у форматі +380)"
          value={student.mobile}
          onChange={handleChange}
        />
        {mobileError && <p className={styles.error}>{mobileError}</p>}
      </div>
      <div>
        <Input
          type="text"
          name="message"
          placeholder="Повідомлення"
          value={student.message}
          onChange={handleChange}
        />
        {messageError && <p className={styles.error}>{messageError}</p>}
      </div>
      <div className={styles.checkboxBlock}>
        <Input
          type="checkbox"
          name="checkbox"
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        <label>Надсилати мені оновлення про академію</label>
      </div>
      <Button disabled={!isFormValid()} />
    </form>
  );
};

export default Form;
