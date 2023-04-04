import React from 'react';
import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import css from './Phonebook.module.css';

export const App = () => {
  return (
    <div className={css.wrap}>
      <Form />
      <ContactsList title="Contacts" />
    </div>
  );
};
