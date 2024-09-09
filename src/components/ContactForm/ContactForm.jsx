import { Form, Formik } from "formik";
import FieldInput from "./components/FieldInput/FieldInput";
import { initialValues } from "./const";
import { validationSchema } from "./const/validation";
import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  return (
    <div className={css.contactForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <FieldInput name="name" label="Name" />
          <FieldInput name="number" label="Number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
