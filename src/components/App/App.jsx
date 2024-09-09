import { nanoid } from "nanoid";
import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Container from "../Container/Container";
import SearchBox from "../SearchBox/SearchBox";

import css from "./App.module.css";
import { DEFAULT_STATE } from "./const";

const App = () => {
  const [contacts, setContacts] = useState(DEFAULT_STATE);

  const onSubmit = (contact, actions) => {
    setContacts((prevContacts) => {
      const newContact = {
        ...contact,
        id: nanoid(),
      };
      return [...prevContacts, newContact];
    });
    actions.resetForm();
  };

  return (
    <Container>
      <div className={css.appWrapper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onSubmit} />
        <SearchBox />
        <ContactList contacts={contacts} />
      </div>
    </Container>
  );
};

export default App;
