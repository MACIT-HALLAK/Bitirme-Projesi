import React, { useState, useEffect } from 'react';
import './BookPage.css';
import Navbar from '../Navbar/Navber';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import axios from 'axios';

const BookPage = () => {
  const [loading, setLoading] = useState(true);
  const [cardCount, setCardCount] = useState(6);
  const [minCardCount, setMinCardCount] = useState(6);
  const [data, setData] = useState([]);

  const loadImages = async () => {
    try {
      const response = await axios.get(
        'https://librarygop.com/public/index.php/api/getallbooks'
      );
      const allData = response.data;
      const slicedData = allData.slice(0, cardCount);
      setData(slicedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, [cardCount]);

  const handleCardCountIncrease = () => {
    setCardCount(prevCount => prevCount + 6);
  };

  const handleCardCountDecrease = () => {
    if (cardCount > minCardCount) {
      setCardCount(prevCount => prevCount - 6);
    }
  };

  return (
    <div className='book-page-container'>
      <div className="BookPage-Header">
        <Navbar />
      </div>
      <div className="BookPage-Body">
        {loading ? (
          <div className="loading">
            <p>Lütfen Bekleyin</p>
            <div className="loader"></div>
          </div>
        ) : (
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
        )}
      </div>

      <div className="btn-btn">
        <button
          type="button"
          className="BookPage-button-Artırma"
          onClick={handleCardCountIncrease}
        >
          Daha Fazla Göster
        </button>

        <button
          type="button"
          className="BookPage-button-Azaltma"
          onClick={handleCardCountDecrease}
        >
          Daha Az Göster
        </button>
      </div>

      <div className="BookPage-Footer">
        <Footer />
      </div>
    </div>
  );
};

export default BookPage;
