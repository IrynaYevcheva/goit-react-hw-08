import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useId } from 'react';
import style from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
  id: '',
};

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handelSubmit = (value, action) => {
    dispatch(addContact(value));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handelSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <div className={style.field}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} placeholder="Name" />
          <ErrorMessage
            className={style.errorMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={style.field}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            placeholder="123-45-67"
          />
          <ErrorMessage
            className={style.errorMessage}
            name="number"
            component="span"
          />
        </div>
        <button className={style.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
