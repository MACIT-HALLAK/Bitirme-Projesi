import React from 'react';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import './BackTo.css';
import { Link } from 'react-router-dom';

const BackTo = (props) => {
  return (
    <>
      {props.dir === 'rtl' ? (
        <Link
          to={props.path !== '' ? '/' + props.path : '/'}
          className="backTo-icon"
        >
          <FaAngleDoubleRight />
        </Link>
      ) : (
        <Link to={'/'} className="back-to-left">
          <FaAngleDoubleLeft />
        </Link>
      )}
    </>
  );
};

export default BackTo;
