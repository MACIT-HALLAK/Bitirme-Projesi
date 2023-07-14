import React, { useEffect, useState, useMemo } from 'react'; //rfce
import './WordsPage.css';
import Title from '../Title/Title';
import { FaRegTrashAlt } from 'react-icons/fa';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function WordsPage() {
  const [cookies] = useCookies(['email']);
  const [bookData, setBookData] = useState([]);
  const [wordsData, setWordsData] = useState([]);

  const [receivedData, setReceivedData] = useState({});

  const handleDataFromChild = (data) => {
    // Handle the received data in the parent component
    setReceivedData(data);
  };

  const kitapidgetit = async () => {
    const res = await axios.get(
      `https://librarygop.com/public/index.php/api/words/${cookies.email}`
    );
    // İstek başarılı olduğunda yapılacak işlemler

    const bookIds = res.data;
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

  useEffect(() => {
    kitapidgetit();
  }, []);
  return (
    <div className="word-page-parent">
      <div className="word-page-wraper">
        {receivedData ? (
          Array.from(receivedData)?.map((item) => (
            <>
              <Title title={item.name} />
              {item.value.length > 1 ? (
                item.value?.map((value) => {
                  return (
                    <div className="word-page-child">
                      <p>{value}</p>
                    </div>
                  );
                })
              ) : (
                <div className="word-page-child">
                  <p>{item.value}</p>
                </div>
              )}
            </>
          ))
        ) : (
          <div></div>
        )}
        {/* <div className="word-page-child">
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
        </div> */}
      </div>
      <VerticalNavbar class={bookData} sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default WordsPage;
