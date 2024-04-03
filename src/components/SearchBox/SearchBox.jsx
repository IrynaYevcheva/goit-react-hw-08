import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBox.module.css';
import {
  changeNameFilter,
  changeNumberFilter,
} from '../../redux/filters/slice';
import {
  selectNameFilter,
  selectNumberFilter,
} from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const numberFilter = useSelector(selectNumberFilter);
  const nameId = useId();
  const numberId = useId();
  const handleNameChange = e => {
    dispatch(changeNameFilter(e.target.value));
  };
  const handleNumberChange = e => {
    dispatch(changeNumberFilter(e.target.value));
  };
  return (
    <div className={styles.box}>
      <ul>
        <li>
          <label htmlFor={nameId}>Search by name</label>
          <input
            className={styles.input}
            onChange={handleNameChange}
            value={nameFilter}
            name="search"
            type="text"
            id={nameId}
          />
        </li>
        <li>
          <label htmlFor={numberId}>Search by number</label>
          <input
            className={styles.input}
            onChange={handleNumberChange}
            value={numberFilter}
            name="search"
            type="text"
            id={numberId}
          />
        </li>
      </ul>
    </div>
  );
}
