import React, { useEffect, useState, useMemo } from 'react'; //rfce
import './WordsPage.css';
import Title from '../Title/Title';
import { FaRegTrashAlt } from 'react-icons/fa';
import VerticalNavbar from '../VerticalNavbar/VerticalNavbar';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Swal1 from 'sweetalert2';

function WordsPage() {
  const [cookies] = useCookies(['email']);
  const [bookData, setBookData] = useState([]);
  const [wordsData, setWordsData] = useState([]);
  const [receivedData, setReceivedData] = useState({});
  const [cookiesemail] = useCookies(['email']);
  const email = cookies.email;
  const [alintilar, setalintilar] = useState([]);
  const [kelimeler, setkelimeler] = useState([]);
  const handleDataFromChild = async (data) => {
    // Handle the received data in the parent component
    setReceivedData(data);
    const data1 = data[0].value; // receivedData[0].value, bir dizi içerisinde kelimeler ve cümleler içeriyor

    // setalintilar((prev) => {
    //   return [...prev, trimmedElement];
    // });
    setkelimeler([]);
    setalintilar([]);
    data1.forEach((element) => {
      const trimmedElement = element.trim();
      if (trimmedElement !== '') {
        const elementWords = trimmedElement.split(/\s+/);
        if (elementWords.length > 1) {
          setalintilar((prev) => {
            return [...prev, trimmedElement];
          });
        } else if (elementWords.length === 1) {
          setkelimeler((prev) => {
            return [...prev, elementWords[0]];
          });
        }
      }
    });

    console.log('kelimeler:', kelimeler); // Sadece kelimeleri içeren dizi
    console.log('alintilar:', alintilar); // Sadece cümleleri içeren dizi
  };

  // console.log(alintilar);

  const kitapidgetit = async () => {
    const res = await axios.get(
      `https://deneme.librarygop.com/public/index.php/api/words/${cookies.email}`
    );

    const bookIds = res.data;
    //console.log(bookIds);
    await axios
      .post('https://deneme.librarygop.com/public/index.php/api/getbooksname', {
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
    Swal1.fire({
      title: 'Emin Misiniz?',
      text: 'Bu kelimeyi silmek istediğinizden emin misiniz?!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1c8b78',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Evet!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://deneme.librarygop.com/public/index.php/api/words_delete/${email}/${word}`
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

        Swal1.fire('silindi!', 'Kelime Silindi.', 'success');
      }
    });
    //console.log(word); `http://127.0.0.1:8000/api/words/${email}/${word}`
  };

  useEffect(() => {
    kitapidgetit();

    //window.location.reload();
  }, []);
  return (
    <div className="word-page-parent">
      <Title title={receivedData[0]?.name} />
      <div className="word-page-wraper">
        {receivedData ? (
          <>
            <div>
              {kelimeler.length > 0 && <h4>kelimeler</h4>}
              {kelimeler.length > 0 &&
                kelimeler.map((item) => {
                  return (
                    <div className="word-page-child">
                      {item}
                      <button
                        onClick={() =>
                          handleDelete(receivedData[0]?.value, item)
                        }
                      >
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  );
                })}
            </div>
            <div>
              {alintilar.length > 0 && <h4>Alıntılar</h4>}
              {alintilar.length > 0 &&
                alintilar.map((item) => {
                  return (
                    <div className="word-page-child">
                      {item}
                      <button
                        onClick={() =>
                          handleDelete(receivedData[0]?.value, item)
                        }
                      >
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  );
                })}
            </div>
          </>
        ) : (
          <div>no data to show </div>
        )}
      </div>
      <VerticalNavbar class={bookData} sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default WordsPage;
