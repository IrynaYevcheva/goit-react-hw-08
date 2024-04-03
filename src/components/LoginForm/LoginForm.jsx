import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, 'Too Long!')
      .max(50, 'Too Long!')
      .required('Required!'),
    password: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
  });

  const loggedUser = {
    email: '',
    password: '',
  };

  const handleSubmit = (loggedUser, actions) => {
    dispatch(login(loggedUser))
      .unwrap()
      .then(() => {
        toast.success('Logged In successfully!');
        navigate('/contacts');
      })
      .catch(() => {
        toast.error('Something went wrong, try again!');
      });
    actions.resetForm();
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();
  return (
    <>
      <h2 className={styles.title}>Log In</h2>
      <Formik
        initialValues={loggedUser}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form className={styles.form}>
          <div className={styles.formItem}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field type="text" name="email" id={emailFieldId}></Field>
            <ErrorMessage name="email" as="span" />
          </div>
          <div className={styles.formItem}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field type="text" name="password" id={passwordFieldId}></Field>
            <ErrorMessage name="password" as="span" />
          </div>
          <button className={styles.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
}
