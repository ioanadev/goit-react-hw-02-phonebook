export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <div>
            {contact.name}: {contact.number}
          </div>
        </li>
      ))}
    </ul>
  );
};
