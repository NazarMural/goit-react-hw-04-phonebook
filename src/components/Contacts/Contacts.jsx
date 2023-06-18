import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, ItemText, Button, Input, Title } from './Contacts.styled';

const Contacts = ({ contacts, filter, handleChange, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <List>
        {filter !== ''
          ? filteredContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <ItemText>
                  {name}: {number}
                </ItemText>
                <Button onClick={() => deleteContact(id)}>Delete</Button>
              </Item>
            ))
          : contacts.map(({ id, name, number }) => (
              <Item key={id}>
                <ItemText>
                  {name}: {number}
                </ItemText>
                <Button onClick={() => deleteContact(id)}>Delete</Button>
              </Item>
            ))}
      </List>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
