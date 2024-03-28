import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import style from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <div className={style.name}>
          <p>
            <IoPerson />
            {name}
          </p>
        </div>
        <div className={style.number}>
          <p>
            <FaPhoneAlt /> {number}
          </p>
        </div>
      </div>
      <button className={style.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
