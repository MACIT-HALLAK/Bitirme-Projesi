import Card from '../Card/Card';
import Navbar from '../Navbar/Navber';
import Footer from '../Footer/Footer';
import './Writer.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Form() {
  const [data, setData] = useState([]);
  const [databook, setDataBook] = useState([]);
  const [loading, setLoading] = useState(true);
  let { writerId } = useParams();

  useEffect(() => {
    loadImages();
  }, []);
  const loadImages = async () => {
    const re = await axios.get(
      `https://deneme.librarygop.com/public/index.php/api/getwriter/${writerId}`
    );
    const res = await axios.get(
      `https://deneme.librarygop.com/public/index.php/api/getbooksbyuserid/${writerId}`
    );
    setData(re.data);
    setDataBook(res.data);
    setLoading(false);
  };

  return (
    <>
      <div className="writer-container">
        <Navbar />
        <div className="writer-card-wraper">
          {loading ? (
            <div className="loading">
              <p>Lütfen Bekleyin</p>
              <div className="loader"></div>
            </div>
          ) : (
            data.map((item) => (
              <>
                <div>
                  <img
                    src={`data:image/jpeg;base64,${item.content}`}
                    alt="tazarin resmi"
                  />
                </div>
                <div>
                  <h3>
                    <strong>Yazar: </strong>
                    {item.author}
                  </h3>
                  <p>
                    <strong>Yazar Hakkında:</strong> {item.desc}
                  </p>
                  <p>
                    {/* <strong>Kitaplar Sayısı:</strong> {item.bookNumber} */}
                  </p>
                </div>
              </>
            ))
          )}
        </div>
        {data.map((item) => (
          <h2>yazarin butun kitablari {item.bookNumber} kitabı vardır.</h2>
        ))}
        <div className="writer-book-wraper">
          {databook.map((items) => (
            <Card
              key={items.id}
              cardNumber={items.id}
              bookImage={`data:image/jpeg;base64,${items.conten_book}`}
              writerImage={`data:image/jpeg;base64,${items.conten_author}`}
              name={items.title}
              WriterName={items.author}
            />
          ))}
        </div>
        <div className="writer-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Form;
