import { useState, useEffect, useMemo, useContext } from 'react';
import './BookPage.css';
import Navbar from '../Navbar/Navber';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import axios from 'axios';
import ChildComponent from '../ChildComponent';
import { DataContext } from '../DataContext';
import { useParams } from 'react-router';

const BookPage = () => {
  const {level} = useParams();
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState([]);
  const [cardCount, setCardCount] = useState(5);
  const [minCardCount, setMinCardCount] = useState(6);
  
  
  const data = useContext(DataContext);

  const sliced_data_base = data?.slice(0, cardCount);

  useEffect(() => {
        setSlicedData(sliced_data_base);
  }, [cardCount]);

  const handleCardCountIncrease = () => {
    setCardCount((prevCount) => prevCount + 3);
  };

  const handleCardCountDecrease = () => {
    if (cardCount > minCardCount) {
      setCardCount((prevCount) => prevCount - 3);
    }
  };

  return (
    <div className="book-page-container">
      <div className="BookPage-Header">
        <Navbar />
      </div>
      <div className="BookPage-Body">
        <ChildComponent data={slicedData} />
      </div>

      {level ? (''):(<div className="btn-btn">
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
    </div>)
      }
      <div className="BookPage-Footer">
        <Footer />
      </div>
    </div>
  );
};

export default BookPage;
