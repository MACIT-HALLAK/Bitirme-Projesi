import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './BackTo.css';
import { Link } from 'react-router-dom';

const BackTo = () => {
    return (
        <Link to="/" className="backTo-icon">
            <FaAngleDoubleRight />
        </Link>
    );
};

export default BackTo;
