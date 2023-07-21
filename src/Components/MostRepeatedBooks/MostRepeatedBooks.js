import { useState, useEffect } from 'react';
import './MostRepeatedBooks.css';
import Navbar from '../Navbar/Navber';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Title from '../Title/Title';

const MostRepeatedBooks = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);
  const loadImages = async () => {
    const re = await axios.get(
      'https://deneme.librarygop.com/public/index.php/api/getallbooks'
    );
    setData(re.data);
    setLoading(false);

    const res = await axios.get(
      'https://deneme.librarygop.com/public/index.php/api/getmostrepeatedbook '
    );
    setDataCard(res.data);
  };
  const contentStyle = {
    position: 'absolute',
    backgroundColor: '#1c8b78',
    width: '50px',
    height: '50px',
    top: '-13px',
    left: '-15px',
    borderRadius: '25px',
    color: 'white',
    lineHeight: '50px',
    textAlign: 'center',
    zIndex: '5',
  };
  return (
    <div className="MRBPage-container">
      <div className="MRBPage-Header">
        <Navbar />
      </div>
      <Title title="En Çok Okunan Kitablar" />
      <div className="MRBPage-Body">
        {loading ? (
          <div className="loading">
            <p>Lütfen Bekleyin</p>
            <div className="loader"></div>
          </div>
        ) : (
          dataCard.map((item) =>
            data.map((items) => {
              if (items.id == item.bookId) {
                return (
                  <div className="MRB-cardRN">
                    <div style={contentStyle}>{item.count} kere</div>
                    <Card
                      key={items.id}
                      cardNumber={items.id}
                      bookImage={`data:image/jpeg;base64,${items.conten_book}`}
                      writerImage={`data:image/jpeg;base64,${items.conten_author}`}
                      name={items.title}
                      WriterName={items.author}
                    />
                  </div>
                );
              }
            })
          )
        )}
      </div>

      <div className="MRBPage-Footer">
        <Footer />
      </div>
    </div>
  );
};

export default MostRepeatedBooks;
