import style from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const element = useId();
  const filter = useSelector(selectNameFilter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={style.searchBox}>
      <label className={style.searchLabel} htmlFor={element}>
        Find contacts by name
      </label>
      <input
        className={style.searchInput}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Name"
      />
    </div>
  );
};
