import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import ContactList from './ContactList/ContactList';
import { selectContacts } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

import css from './App.module.css';

export function App() {
  const { isLoading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  if (error) return Notify.failure(`${error}`);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <Form />
      <h2 className={css.header}>Contacts</h2>

      <Filter />
      <ContactList />
      {isLoading && <Loader />}
    </div>
  );
}
