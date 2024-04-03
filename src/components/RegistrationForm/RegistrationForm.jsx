import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './RegistrationForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
    email: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
    password: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
  });

  const registeredUser = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (registeredUser, actions) => {
    dispatch(register(registeredUser))
      .unwrap()
      .then(() => {
        toast.success('Registered successfully!');
        navigate('/contacts');
      })
      .catch(() => {
        toast.error('Something went wrong, try again!');
      });
    actions.resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  return (
    <>
      <h2 className={styles.title}>Sign Up</h2>
      <Formik
        initialValues={registeredUser}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <Form className={styles.form}>
          <div className={styles.formItem}>
            <label htmlFor={nameFieldId}>Username</label>
            <Field type="text" name="name" id={nameFieldId}></Field>
            <ErrorMessage name="name" as="span" />
          </div>
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
            Sign Up
          </button>
        </Form>
      </Formik>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  );
}
