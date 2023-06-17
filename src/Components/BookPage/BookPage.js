import React, { useState } from 'react';
import './BookPage.css';
import Navbar from '../Navbar/Navber';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import axios from 'axios';
import { createElement } from 'react';

const BookPage = () => {
  const [books, setBooks] = useState({});
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    await axios.get('http://127.0.0.1:8000/api/addbook').then(({ data }) => {
      setBooks(data);
      console.log(books);
    });
  };

  //   const [cardCount, setCardCount] = useState(10);
  //   const [minCardCount, setMinCardCount] = useState(10);

  //   const Card_Adedi_Artırmak = () => {
  //     setCardCount(cardCount + 10);
  //   };

  //   const Card_Adedi_Azaltmak = () => {
  //     if (cardCount - 10 < minCardCount) {
  //       setCardCount(minCardCount);
  //     } else {
  //       setCardCount(cardCount - 10);
  //     }
  //   };

  //   const cards = [];
  //   for (let i = 0; i < cardCount; i++) {
  //     cards.push(<Card key={i} />);
  //   }

  return (
    <>
      <div className="BookPage-Header">
        <Navbar />
      </div>
      {/* 
      <div className="btn-btn">
      <button
      type="submit"
      className="BookPage-button-Artırma"
      onClick={Card_Adedi_Artırmak}
      >
      Daha Fazla Göster
      </button>
      
      <button
      type="submit"
      className="BookPage-button-Azaltma"
      onClick={Card_Adedi_Azaltmak}
        >
          Daha Az Göster
        </button>
      </div> */}

      <div className="BookPage-Body">
        {books.length > 0 &&
          books.map((row, key) => (
            <>
              <div>{row.id}</div>
              <img
                width="100px"
                src={`http://127.0.0.1:8000/storage/product${row.coverImage}`}
                alt={`${row.title}`}
              />
              <div>{row.title}</div>
              <div>{row.author}</div>
              <div>{row.pageCount}</div>
              <div>{row.language}</div>
              <div>{row.category}</div>
              <div>{row.level}</div>
              <div>{row.desc}</div>
              <div>{row.content}</div>
            </>
          ))}
      </div>

      <div className="BookPage-Footer">
        <Footer />
        <div>ggggg</div>
      </div>
    </>
  );
};

export default BookPage;
