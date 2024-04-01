import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
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
      <h2>Log In</h2>
      <Formik
        initialValues={loggedUser}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="text" name="email" id={emailFieldId}></Field>
          <ErrorMessage name="email" as="span" />
          <label htmlFor={passwordFieldId}>Password</label>
          <Field type="text" name="password" id={passwordFieldId}></Field>
          <ErrorMessage name="password" as="span" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};
