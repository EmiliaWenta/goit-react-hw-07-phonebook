import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <InfinitySpin
        animationDuration="1"
        width="200"
        visible={true}
        color="#3f51b5"
      />
    </div>
  );
}
