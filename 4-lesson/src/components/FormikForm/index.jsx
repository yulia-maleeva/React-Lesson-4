import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "../Form/index.module.scss";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Юзернейм повинен містити мінімум 4 символи")
    .required("Це поле є обов'язковим!"),
  email: Yup.string()
    .matches(/\S+@\S+\.\S+/, "Неправильна адреса електронної пошти")

    .required("Це поле є обов'язковим!"),
  mobile: Yup.string()
    .matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, "Перевір формат номеру телефона")
    .required("Це поле є обов'язковим!"),
  message: Yup.string()
    .min(10, "Повідомлення має бути не менше 10 символів")
    .required("Це поле є обов'язковим!"),
  checked: Yup.bool().oneOf([true]),
});

const FormikForm = () => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      mobile: "",
      message: "",
      checked: false,
    }}
    validationSchema={SignupSchema}
    validateOnMount
    onSubmit={(values) =>
      alert(`Ваші дані були надіслані! ${JSON.stringify(values, null, 2)}`)
    }
  >
    {({ errors, touched, isValid }) => (
      <Form>
        <div>
          <Field type="text" name="name" placeholder="Ім'я та прізвище" />
          <ErrorMessage name="name" component="p" className={styles.error} />
        </div>
        <div>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" className={styles.error} />
        </div>
        <div>
          <Field
            type="tel"
            name="mobile"
            placeholder="Телефон (у форматі +380)"
          />
          <ErrorMessage name="mobile" component="p" className={styles.error} />
        </div>
        <div>
          <Field type="text" name="message" placeholder="Повідомлення" />
          <ErrorMessage name="message" component="p" className={styles.error} />
        </div>
        <div className={styles.checkboxBlock}>
          <Field type="checkbox" name="checked" />
          <label>Надсилати мені оновлення про академію</label>
        </div>
        <button type="submit" disabled={!isValid}>
          Надіслати
        </button>
      </Form>
    )}
  </Formik>
);

export default FormikForm;
