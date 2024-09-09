import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  return (
    <div className={css.contact}>
      <div className={css.content}>
        <div className={css.row}>
          <FaUser />
          <span>{name}</span>
        </div>
        <div className={css.row}>
          <FaPhone />
          <span>{number}</span>
        </div>
      </div>
      <div className={css.action}>
        <button onClick={() => console.log(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
