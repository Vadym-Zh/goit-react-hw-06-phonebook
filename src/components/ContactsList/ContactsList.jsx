import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from '../../redux/slicer';
import Filter from '../Filter/Filter';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filtredContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsList = filtredContact();

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ul className={css.list}>
        {contactsList.map(contact => (
          <li className={css.item} key={contact.id}>
            <span>{contact.name}:</span>
            <span>{contact.number}</span>
            <button
              type="button"
              className={css.deleteButton}
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string,
};

export default ContactsList;
