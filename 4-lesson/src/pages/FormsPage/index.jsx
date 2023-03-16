import React from "react";
import Form from "../../components/Form";
import FormikForm from "../../components/FormikForm";

const FormsPage = () => (
  <>
    <h2>Controlled Components</h2>
    <Form
      handleSubmit={(e) => {
        e.preventDefault();
        alert("Ваші дані були надіслані!");
      }}
    />
    <h2>Formik</h2>
    <FormikForm />
  </>
);

export default FormsPage;
