import React, { useEffect, useMemo, useState } from 'react'; //rfce
import './WordsPage.css';
import Title from '../Title/Title';
import { FaRegTrashAlt } from 'react-icons/fa';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function WordsPage() {
  const [cookies] = useCookies(['email']);
  const [bookData, setBookData] = useState([]);

  const kitapidgetit = async () => {
    const res = await axios.get(
      `https://librarygop.com/public/index.php/api/words/${cookies.email}`
    );
    // İstek başarılı olduğunda yapılacak işlemler

    const bookIds = res.data;
    console.log(bookIds);
    await axios
      .post('https://librarygop.com/public/index.php/api/getbooksname', {
        bookids: bookIds,
      })
      .then((response) => {
        const books = response.data;
        setBookData(books);
        // İşlemlere devam edin...
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useMemo(() => {
    kitapidgetit();
  }, []);
  return (
    <div className="word-page-parent">
      <Title title="Reader At Work 2" />
      <div className="word-page-wraper">
        <div className="word-page-child">
          <p>attractiveness</p>
          <p>جاذبية</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="word-page-child">
          <p>wishes</p>
          <p>التمنيات</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="word-page-child">
          <p>wishes</p>
          <p>التمنيات</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="word-page-child">
          <p>wishes</p>
          <p>التمنيات</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="word-page-child">
          <p>wishes</p>
          <p>التمنيات</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="word-page-child">
          <p>wishes</p>
          <p>التمنيات</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="word-page-child">
          <p>wishes</p>
          <p>التمنيات</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="word-page-child">
          <p>wishes</p>
          <p>التمنيات</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="word-page-child">
          <p>wishes</p>
          <p>التمنيات</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="word-page-child">
          <p>wishes</p>
          <p>التمنيات</p>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
      <VerticalNavbar class={bookData} />
    </div>
  );
}

export default WordsPage;
