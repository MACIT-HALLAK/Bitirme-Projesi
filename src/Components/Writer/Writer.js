import Card from '../Card/Card';
import Navbar from '../Navbar/Navber';
import Footer from '../Footer/Footer';
import WriterImage from '../../Assets/images/iyad.webp';
import './Writer.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Form() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);
  const loadImages = async () => {
    const re = await axios.get(
      'https://librarygop.com/public/index.php/api/getallwriter'
    );
    setData(re.data);
    console.log(re.data);
  };

  return (
    <>
      <Navbar />
      <div className="writer-container">
        <div className="writer-card-wraper">
          {data.map((item) => (
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
                  <strong>Kitaplar Sayısı:</strong> {item.bookNumber}
                </p>
              </div>
            </>
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
