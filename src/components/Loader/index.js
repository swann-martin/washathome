import React from 'react';
import Blob from '../../assets/loader.svg';
import './style.scss';

const Loader = () => {
  return (
    <div className="loader">
      <img src={Blob} alt="loading your content" />
    </div>
  )
}

export default Loader;
