import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './AuthNav.module.css';

const linkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export default function AuthNav() {
  return (
    <div className={styles.div}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/login" className={linkClass}>
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={linkClass}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
