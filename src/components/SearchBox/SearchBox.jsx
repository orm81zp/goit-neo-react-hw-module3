import { Form, Formik } from "formik";
import FieldInput from "../FieldInput/FieldInput";
import css from "./SearchBox.module.css";

const SearchBox = ({ search, onChange }) => {
  const onSubmit = (values, actions) => {
    const { search } = values;
    onChange(search);
    actions.resetForm();
  };

  const handleChange = (event) => {
    if (event.target.name === "search") {
      onChange(event.target.value);
    }
  };

  return (
    <div className={css.searchBox}>
      <Formik initialValues={{ search }} onSubmit={onSubmit}>
        <Form onChange={handleChange} className={css.form}>
          <FieldInput name="search" label="Find contacts by name" />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
