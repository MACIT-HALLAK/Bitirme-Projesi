import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './BackTo.css';
import { Link } from 'react-router-dom';

const BackTo = (props) => {
  return (
    <Link
      to={props.path !== '' ? '/' + props.path : '/'}
      className="backTo-icon"
    >
      <FaAngleDoubleRight />
    </Link>
  );
};

export default BackTo;
