// ChildComponent.js
import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import Card from './Card/Card';
 import { useParams } from 'react-router-dom';

const ChildComponent = ({ data }) => {
  //  const data = useContext(DataContext);
    const{level} = useParams();
   return (
    <>  
     {data ? (
       data.map((items) => (
            <>
            {level? items.level == level ?
            <Card
            key={items.id}
            cardNumber={items.id}
            bookImage={`data:image/jpeg;base64,${items.conten_book}`}
            writerImage={`data:image/jpeg;base64,${items.conten_author}`}
            name={items.title}
            WriterName={items.author}
          />:"":
          <Card
            key={items.id}
            cardNumber={items.id}
            bookImage={`data:image/jpeg;base64,${items.conten_book}`}
            writerImage={`data:image/jpeg;base64,${items.conten_author}`}
            name={items.title}
            WriterName={items.author}
          />
            }
              
            </>
          ))):("no data")
        }
    
    </>

  );
  
};

export default ChildComponent;

 


  //----------------------
  // return (
  //   <>
  //     {data ? (
  //       data.map((item) => (
  //         <Card
  //           key={item.id}
  //           cardNumber={item.id}
  //           bookImage={`data:image/jpeg;base64,${item.conten_book}`}
  //           writerImage={`data:image/jpeg;base64,${item.conten_author}`}
  //           name={item.title}
  //           WriterName={item.author}
  //         />
  //       ))
  //     ) : (
  //       <p>No data</p>
  //     )}
  //   </>
  // );