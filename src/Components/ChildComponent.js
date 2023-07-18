// ChildComponent.js
import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import Card from './Card/Card';

const ChildComponent = () => {
  const data = useContext(DataContext);

  console.log('context data');
  console.log(data);

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
