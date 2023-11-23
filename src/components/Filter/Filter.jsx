import React from 'react';
import { useDispatch } from 'react-redux';

import { filterContact } from '../../redux/filterSlice';

import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const value = e.target.value;
    dispatch(filterContact(value));
  };

  return (
    <div className={css.filter}>
      <p className={css.filter__title}>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        name="nametofilter"
        onChange={handleFilter}
      />
    </div>
  );
}
