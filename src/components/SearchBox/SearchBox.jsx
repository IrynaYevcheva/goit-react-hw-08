import style from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <label htmlFor={nameId}>Find contacts by name</label>
          <input
            onChange={handleNameChange}
            value={nameFilter}
            name="search"
            type="text"
            id={nameId}
          />
        </li>
        <li className={css.item}>
          <label htmlFor={numberId}>Find contacts by number</label>
          <input
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
