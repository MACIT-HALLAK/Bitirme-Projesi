// ChildComponent.js
import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import Card from './Card/Card';

const ChildComponent = ({ data }) => {
  // const data = useContext(DataContext);

  return (
    <>
      {data ? (
        data.map((item) => (
          <Card
            key={item.id}
            cardNumber={item.id}
            bookImage={`data:image/jpeg;base64,${item.conten_book}`}
            writerImage={`data:image/jpeg;base64,${item.conten_author}`}
            name={item.title}
            WriterName={item.author}
          />
        ))
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

export default ChildComponent;
