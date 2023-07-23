import { useEffect, useState } from 'react';
import './Writerspage.css';
import Navbar from '../Navbar/Navber';
import CardWriters from '../CardWriters/CardWriters';
import axios from 'axios';
import Footer from '../Footer/Footer';
import { FaSearch } from 'react-icons/fa';

const Writerspage = () => {
  const [data, setData] = useState([]);
  // const [value, setValue] = useState('');

  useEffect(() => {
    loadData();
  }, []);
  //veriler veritabaninda cek
  const loadData = async () => {
    const re = await axios.get(
      'https://deneme.librarygop.com/public/index.php/api/getallwriter'
    );
    setData(re.data);
  };
  //bu metot aranan yazarin yada yazarlarin donduruyor
  const search = (word) => {
    if (word !== '') {
      const newData = data.filter((item) => {
        return item.author.toLowerCase().includes(word);
      });
      setData(newData);
    } else {
      loadData();
    }
  };
  return (
    <div className="Writerspage-layout">
      <Navbar />
      <div className="Writerspage-layout-arama">
        <h3>
          <span>
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Bir Yazarın Ara"
            onChange={(e) => search(e.target.value)}
          ></input>
        </h3>
      </div>
      <div className="parent">
        {data
          ? data.map((item) => (
              <CardWriters
                WriterImage={`data:image/jpeg;base64,${item.content}`}
                writerName={item.author}
                id={item.userId}
                bookN={item.bookNumber}
              />
            ))
          : console.log('no data')}
      </div>

      <Footer />
    </div>
  );
};

export default Writerspage;
