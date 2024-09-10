import clsx from "clsx";
import { ErrorMessage, Field } from "formik";
import { useId } from "react";
import css from "./FieldInput.module.css";

const FieldInput = ({ name, label, className = "" }) => {
  const fieldId = useId();

  return (
    <div className={clsx(css.field, className)}>
      {label && <label htmlFor={fieldId}>{label}</label>}
      <Field type="text" name={name} id={fieldId} />
      <ErrorMessage className={css.error} name={name} component="span" />
    </div>
  );
};

export default FieldInput;
