import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Navigation.module.css';

const linkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/contacts" className={linkClass}>
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
