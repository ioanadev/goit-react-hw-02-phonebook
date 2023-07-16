import { Section } from './section/section';
import { nanoid } from 'nanoid';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Component } from 'react';
import { Filter } from './filter/filter';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  addContact = (name, number) => {
    const id = nanoid();
    const newContact = { id, name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <Section title={'Phonebook'} />
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />

        <Section title={'Contacts'} />
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}
