import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import PhoneBookForm from 'components/PhoneBookForm/PhoneBookForm';
import { Container } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const contactsString = localStorage.getItem('contacts');
    const contactsLS = JSON.parse(contactsString);
    console.log(contactsLS);
    if (contactsLS === null) {
      setContacts([]);
    } else {
      setContacts(contactsLS);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      setMounted(false);
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, mounted]);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'filter': {
        setFilter(value);
        break;
      }
      default:
        break;
    }
  };

  const handleAddContacts = (name, number) => {
    const sameTypeContacts = contacts.filter(contact => contact.name === name);
    if (sameTypeContacts.length !== 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
    console.log(contacts);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <Section title="Phonebook">
        <PhoneBookForm handleAddContacts={handleAddContacts} />
      </Section>

      <Section title="Contacts">
        <Contacts
          contacts={contacts}
          filter={filter}
          deleteContact={deleteContact}
          handleChange={handleChange}
        />
      </Section>
    </Container>
  );
}
