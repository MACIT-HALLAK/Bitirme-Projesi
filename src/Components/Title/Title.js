import React from 'react';
import './Title.css';

//----Title component burasi
const Title = (props) => {
  return (
    <>
      <h2 className="title" style={{ marginBottom: '.75rem' ,width :'100%' }}>{props.title}</h2>
    </>
  );
};
export default Title;