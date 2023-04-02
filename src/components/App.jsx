import React from 'react';
import ContactsForm from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Container } from './App.styled';

export default function App() {

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Container>
    </>
  );
}

