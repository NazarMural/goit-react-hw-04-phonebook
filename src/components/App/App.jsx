import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import PhoneBookForm from 'components/PhoneBookForm/PhoneBookForm';
import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    // localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    const contactsString = localStorage.getItem('contacts');
    const contacts = JSON.parse(contactsString);
    if (contacts === null) {
      this.setState({ contacts: [] });
    } else {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddContacts = (name, number) => {
    const { contacts } = this.state;

    const sameTypeContacts = contacts.filter(contact => contact.name === name);
    if (sameTypeContacts.length !== 0) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState({ contacts: [...contacts, newContact] });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    console.log(contacts);

    return (
      <Container>
        <Section title="Phonebook">
          <PhoneBookForm handleAddContacts={this.handleAddContacts} />
        </Section>

        <Section title="Contacts">
          <Contacts
            contacts={contacts}
            filter={filter}
            handleChange={this.handleChange}
            deleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export { App };
