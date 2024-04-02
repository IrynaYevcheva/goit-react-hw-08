import style from './ContactList.module.css';
import { useSelector } from 'react-redux';

import { Contact } from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={style.listContact}>
      {contacts.map(contact => (
        <li className={style.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
