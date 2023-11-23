import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/operations';

import css from './ContactListItem.module.css';

export default function ContactListItem({ id, name, phone }) {
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactListItem__item} key={id.toString()}>
      {name}: {phone}
      <button
        className={css.contactListItem__button}
        type="button"
        onClick={() => {
          handleRemove(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
