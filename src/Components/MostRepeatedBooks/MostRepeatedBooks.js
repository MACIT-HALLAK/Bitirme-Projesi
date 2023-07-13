import { useState, useEffect } from 'react';
import './MostRepeatedBooks.css';
import Navbar from '../Navbar/Navber';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import axios from 'axios';

const MostRepeatedBooks = () => {
  const [loading, setLoading] = useState(true);

  const [cardCount, setCardCount] = useState(10);
  const [m, setM] = useState([]);
  const [data, setData] = useState([]);
  const [dataCard, setDataCard] = useState([]);
  
  useEffect(() => {
    loadImages();
  }, []);
  const loadImages = async () => {
    const re = await axios.get(
        'https://librarygop.com/public/index.php/api/getallbooks'
        );
    setData(re.data);
    const val = re.data.map((item) => (
        item.id
        ));
    console.log(val);
    setLoading(false);
   
    const res = await axios.get(
        'https://librarygop.com/public/index.php/api/getmostrepeatedbook '       );
        setDataCard(res.data);
        const val1 = res.data.map((item) => (
            item.bookId
            ));
            console.log(val1);
    console.log(checkValues(val,val1));
    setM (checkValues(data,dataCard));
    
  };

  //   const [cardCount, setCardCount] = useState(10);
  //   const [minCardCount, setMinCardCount] = useState(10);

  //   const Card_Adedi_Artırmak = () => {
  //     setCardCount(cardCount + 10);
  //   };

  const checkValues = (arr1, arr2) => {
    const result = arr1.map((value) => ({
      value,
      exists: arr2.includes(value),
    }));
  
    return result;
  };

  return (
    <>
      <div className="MRBPage-Header">
        <Navbar />
      </div>
      <div className="MRBPage-Body">
        {loading ? (
          <div className="loading">
            <p>Lütfen Bekleyin</p>
            <div className="loader"></div>
          </div>
        ) : (
          data.map((items) => (
            
            <>
              <Card
                key={items.id}
                cardNumber={items.id}
                bookImage={`data:image/jpeg;base64,${items.conten_book}`}
                writerImage={`data:image/jpeg;base64,${items.conten_author}`}
                name={items.title}
                WriterName={items.author}
              />
              {/* author
            <Card
              key={items.id}
              bookImage={`data:image/jpeg;base64,${items.conten_author}`}
              name={items.title}
              WriterName={items.author}
            /> */}
            </>
          ))
        )}
      </div>

      

      <div className="MRBPage-Footer">
        <Footer />
      </div>
    </>
  );
};

export default MostRepeatedBooks;
