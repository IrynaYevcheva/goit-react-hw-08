// import styles from './App.module.css';
// import { ContactList } from '../ContactList/ContactList';
// import { SearchBox } from '../SearchBox/SearchBox';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from '../../redux/contacts/operations';
// import { selectLoading, selectError } from '../../redux/contacts/slice';
// import { Loader } from '../Loader/Loader';

// export default function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={styles.wrapper}>
//       <h1 className={styles.title}>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//       {loading && !error && <Loader />}
//     </div>
//   );
// }

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Layout } from '../Layout/Layout';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
      </Route>
    </Routes>
  );
}
