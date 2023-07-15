import React, { useEffect, useState, useMemo } from 'react'; //rfce
import './WordsPage.css';
import Title from '../Title/Title';
import { FaRegTrashAlt } from 'react-icons/fa';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import Navbar from '../Navbar/Navber';

import axios from 'axios';
import { useCookies } from 'react-cookie';

function WordsPage() {
  const [cookies] = useCookies(['email']);
  const [bookData, setBookData] = useState([]);
  const [wordsData, setWordsData] = useState([]);
  const [receivedData, setReceivedData] = useState({});
  const [cookiesemail] = useCookies(['email']);
  const email = cookies.email;

  const handleDataFromChild = (data) => {
    // Handle the received data in the parent component
    setReceivedData(data);
    //console.log(data);
  };

  const kitapidgetit = async () => {
    const res = await axios.get(
      `https://librarygop.com/public/index.php/api/words/${cookies.email}`
    );

    const bookIds = res.data;
    console.log(bookIds);
    await axios
      .post('https://librarygop.com/public/index.php/api/getbooksname', {
        bookids: bookIds,
      })
      .then((response) => {
        const books = response.data;
        setBookData(books);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const title = null;
  const value = null;
  const handleDelete = (item, word) => {
    //console.log(word); `http://127.0.0.1:8000/api/words/${email}/${word}`
    axios
      .delete(
        `https://librarygop.com/public/index.php/api/words_delete/${email}/${word}`
      )
      .then((response) => {
        // İstek başarılı olduğunda yapılacak işlemler
        console.log('Kelime silindi:', response.data);
        window.location.reload();
      })
      .catch((error) => {
        // Hata durumunda yapılacak işlemler
        console.error('bir hata oluştu:', error);
      });
  };

  useEffect(() => {
    kitapidgetit();

    //window.location.reload();
  }, []);
  return (
    <>
      <div className="words-container">
        <Navbar />
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

                          <button onClick={() => handleDelete(item, value)}>
                            <FaRegTrashAlt />
                          </button>
                        </div>
                      );
                    })
                  ) : (
                    <div className="word-page-child">
                      <p>{item.value}</p>
                      <button onClick={() => handleDelete(item, item.value)}>
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  )}
                </>
              ))
            ) : (
              <div></div>
            )}
          </div>
          <VerticalNavbar
            class={bookData}
            sendDataToParent={handleDataFromChild}
          />
        </div>
      </div>
    </>
  );
}

export default WordsPage;
