import React, { useEffect, useMemo, useRef, useState } from 'react';
import Modal from 'react-modal';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navber';
import './ReadingPage.css';
import { useCookies } from 'react-cookie';
import {
  FaArrowLeft,
  FaArrowRight,
  FaLanguage,
  FaCog,
  FaRegEdit,
} from 'react-icons/fa';
import SettingCom from '../Ayarlar/SettingCom';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { getQueriesForElement } from '@testing-library/react';
import Swal from 'sweetalert2';

const ReadingPage = () => {
  let { bookId } = useParams();
  const pa = useRef();
  const [bookdata, setBookdata] = useState([]);
  const control = '';
  // Kitabı veritabanından çekme
  const loadData = async () => {
    const res = await axios.get(
      `https://deneme.librarygop.com/public/index.php/api/getbook/${bookId}`
    );
    setBookdata(res.data);
  };

  const [nextP, setNextP] = useState(0);
  const [prevP, setPrevP] = useState(0);

  const [value, setValue] = useState('');
  const [handle, setHandle] = useState(false);

  //******* */
  const [cookies] = useCookies(['email']);
  const email = cookies.email;
  const [selection, setSelection] = useState(null);
  const [showIcon, setShowIcon] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });

  const [showModal, setShowModal] = useState(false);
  //******* Metin çevirisi için değişkenler */
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('ar');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const readingContainerRef = useRef(null);

  //secilen metini almak icin
  //
  const handleSelection = (e) => {
    setShowModal(false);
    const selectionText = window.getSelection().toString();
    if (selectionText && selectionText.trim() !== '') {
      setSelection(selectionText);

      const eleme = document.querySelector('.reading-container');
      if (contentDiv.current) {
        const selectionRange = window.getSelection().getRangeAt(0);
        const rangeRect = selectionRange.getBoundingClientRect();
        const containerRect = contentDiv.current.getBoundingClientRect();

        // let y = rangeRect.top - containerRect.top + 20;
        const elemeRect = eleme.getBoundingClientRect();
        let y = e.clientY + eleme.scrollTop - elemeRect.top -80;
       
        let x = rangeRect.left - containerRect.left + rangeRect.width / 2 + 40;
        console.log(y)
        const containerWidth = contentDiv.current.clientWidth;
        const containerHeight = contentDiv.current.clientHeight;
        const modalWidth = 200;
        const modalHeight = 200;
        

        if (x + modalWidth > containerWidth) {
          x = containerWidth - modalWidth - 40;
        }

        if (y + modalHeight  > containerHeight) {
          y = containerHeight - modalHeight ;
        }

        // console.log(containerRect);
        // if (containerRect.top < 0) {
        //   y = y - 100;
        // }

        setIconPosition({ x, y });
        setShowIcon(true);
        setInput(selectionText);
      }
    } else {
      setSelection(null);
      setShowIcon(false);
    }
  };
  const handleIconClick = () => {
    translate();
    setShowIcon(false);
    setShowModal(true);
  };

  const wordAdd = () => {
    axios
      .get(
        `https://deneme.librarygop.com/public/index.php/api/words_control/${email}/${bookId}/${selection}`
      )
      .then((response) => {
        console.log(response.data.success);
        let control = response.data.success;
        if (control === true) {
          Swal.fire({
            icon: 'error',
            title: 'Kelime Mevcut!',
            text: 'Seçtiğiniz kelime daha önceden eklenmiş',
            footer:
              '<a href="http://localhost:3000/WordsPage">Eklediğim Kelimelerim Göster...</a>',
          });
        }

        if (control === false) {
          const words = selection
            .split(' ')
            .filter((word) => word.trim() !== '');
          if (words.length > 1) {
            // Sadece 1 kelimeden fazla ise API isteğini gerçekleştirme
            Swal.fire({
              icon: 'error',
              title: 'Sadece bir kelime ekleyebilirsiniz!',
              text: 'Eğer bir alıntı eklemek isterseniz lütfen alıntınız seçin alıntı ekle buttonuna basınız',
            });
            //console.log('Sadece 1 kelimeden ez seçim yapabilirsiniz.');
          } else {
            axios
              .post(
                `https://deneme.librarygop.com/public/index.php/api/word_set/${email}/${bookId}/${selection}`
              )
              .then((res) => {
                //console.log('Kelime eklendi:', response.data);
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Kelime Eklendi',
                  showConfirmButton: false,
                  timer: 1500,
                });
              })
              .catch((error) => {
                //console.error('Kelime ekleme başarısız:', error);
              });
          }
        }
      });
  };
  const quoteAdd = () => {
    axios
      .get(
        `https://deneme.librarygop.com/public/index.php/api/words_control/${email}/${bookId}/${selection}`
      )
      .then((response) => {
        //console.log(response.data.success);
        let control = response.data.success;
        if (control === true) {
          Swal.fire({
            icon: 'error',
            title: 'Alıntınız Mevcut!',
            text: 'Seçtiğiniz Alıntınızı daha önceden eklenmiş',
            footer:
              '<a href="http://localhost:3000/WordsPage">Eklediğim Kelimelerim Göster...</a>',
          });
        }

        if (control === false) {
          const words = selection
            .split(' ')
            .filter((word) => word.trim() !== '');
          if (words.length > 1) {
            axios
              .post(
                `https://deneme.librarygop.com/public/index.php/api/words_set/${email}/${bookId}/${selection}`
              )
              .then((response) => {
                //console.log('Alıntınız eklendi:', response.data);
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Alıntınız Eklendi',
                  showConfirmButton: false,
                  timer: 2000,
                });
              })
              .catch((error) => {
                console.error('Alıntınız eklemeyi başarısız:', error);
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Alıntınız eklemeyi başarısız',
                  showConfirmButton: false,
                  timer: 2000,
                });
              });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Burada Sadece bir Alıntı ekleyebilirsiniz!',
              text: 'Eğer tek bir kelime eklemek isterseniz lütfen kelimenizi seçin kelime ekle buttonuna basınız',
            });
          }
        }
      });
  };

  const translate = () => {
    let apiurl = `https://api.mymemory.translated.net/get?q=${input}&langpair=${from}|${to}`;

    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.responseData.translatedText);
      });
  };

  let contentDiv = useRef();
  let leftButton = useRef();
  let rightButton = useRef();
  let readCon = useRef();
  let globalMouse;

  useEffect(() => {
    readCon.current.addEventListener('mousemove', function (event) {
      globalMouse = event.clientX;
      const contentRect = contentDiv.current.getBoundingClientRect();

      if (globalMouse > contentRect.right) {
        rightButton.current.classList.add('hidden');
      } else if (globalMouse < contentRect.x) {
        leftButton.current.classList.add('hidden');
      }
    });
    contentDiv.current.addEventListener('mousemove', function (event) {
      const mouseX = event.clientX;
      const contentRect = contentDiv.current.getBoundingClientRect();
      const contentWidth = contentDiv.current.offsetWidth;

      if (mouseX < contentRect.left + 75) {
        leftButton.current.classList.remove('hidden');
      } else {
        leftButton.current.classList.add('hidden');
      }
      if (mouseX > contentRect.right - 75) {
        rightButton.current.classList.remove('hidden');
      } else {
        rightButton.current.classList.add('hidden');
      }
    });

    leftButton.current.addEventListener('click', function () {
      contentDiv.current.scrollBy({
        left: -100, // Adjust the scroll amount according to your needs
        behavior: 'smooth',
      });
    });

    rightButton.current.addEventListener('click', function () {
      contentDiv.current.scrollBy({
        left: 100, // Adjust the scroll amount according to your needs
        behavior: 'smooth',
      });
    });
  }, [contentDiv.current]);

  // ------------------ Metin özelliklerini değiştirme ---------------------
  async function changeProps() {
    setTimeout(() => {
      let element_arr = [];

      let prop_obj = JSON.parse(localStorage.getItem('props_arr'));
      console.log(prop_obj);
      if (localStorage.getItem('props_arr')) {
        let all_props = document.querySelectorAll('.items-box span');
        all_props.forEach((element) => {
          let my_prop = element.getAttribute('prop');
          if (
            my_prop === prop_obj.color ||
            my_prop === prop_obj.font ||
            my_prop === prop_obj.size
          ) {
            element_arr.push(element);
          }
        });
        element_arr.forEach((set_active) => {
          set_active.classList.add('active');
        });
        setTimeout(() => {
          pa.current.style.color = prop_obj?.color;
          pa.current.style.fontFamily = prop_obj?.font;
          pa.current.style.fontSize = prop_obj?.size;
        }, 500);
      } else {
        setTimeout(async () => {
          pa.current.style.color = 'black';
          pa.current.style.fontFamily = 'Sans-Serif';
          pa.current.style.fontSize = '16px';
        }, 500);
      }
    }, 500);
  }

  useMemo(() => {
    changeProps();
    loadData();
  }, []);

  const next = () => {
    bookdata.map((item) => {
      if (nextP + 1 < item.content.split('$').length) {
        setNextP(nextP + 1);
      } else {
        setNextP(nextP);
      }
    });
  };
  const preivece = () => {
    if (nextP != 0) setNextP(nextP - 1);
  };
  const writelan = (e) => {
    let To = '';
    if (e == 'Türkçe') To = 'tr';
    else if (e == 'English') To = 'en';
    else To = 'ar';

    console.log(To);
    setTo(To);
  };
  // ----------------------End change props of text--------------------------

  return (
    <div className="reading-container" ref={readCon}>
      <Navbar />
      {handle && (
        <>
          <SettingCom
            setlang={writelan}
            clicking={() => {
              setHandle((prev) => !prev);
            }}
            show={'show'}
            handle={handle}
            className="show"
          />
          <div className="mask"></div>
        </>
      )}
      <section
        className="text"
        onMouseUp={(event) => handleSelection(event)}
        ref={contentDiv}
      >
        {showIcon && (
          <div
            style={{
              position: 'absolute',
              left: iconPosition.x,
              top: iconPosition.y,
              zIndex: 1,
            }}
          >
            <button
              className="trans-btn"
              style={{ fontSize: '30px', zIndex: 10, cursor: 'pointer' }}
              onClick={handleIconClick}
            >
              <FaLanguage />{' '}
            </button>
            <div>
              <button onClick={wordAdd}>Kelime Ekle</button>
              <Link to="/WordsPage">
                <FaRegEdit />
              </Link>
            </div>
            <div>
              <button onClick={quoteAdd}>Alıntı Ekle</button>
              <Link to="/WordsPage">
                <FaRegEdit />
              </Link>
            </div>
          </div>
        )}
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          overlayClassName="custom-overlay"
          style={{
            content: {
              minWidth: '200px',
              minHeight: '150px',
              maxWidth: 'fit-content',
              height: 'fit-content',
              // margin: 'auto',
              direction: 'ltr',
              position: 'absolute',
              left: iconPosition.x,
              top: iconPosition.y,
              zIndex: 1,
              color: 'var(--text-color)',
            },
          }}
        >
          <div>
            <p>{output}</p>
            <p>{selection}</p>
          </div>
        </Modal>

        {bookdata.map((item, index) => {
          const newData = item.content.split('$');
          const dataNew = newData[nextP].split('#');
          return (
            <p
              className="reading-page-dir"
              ref={pa}
              direc={item.langueg}
              key={index}
            >
              <span className="page-title">
                {dataNew.length > 1 ? dataNew[0] : ''}
              </span>
              {dataNew.length > 1 ? dataNew[1] : dataNew[0]}
              <span className="navigation-items">{nextP + 1}</span>
            </p>
          );
        })}

        <div className="next-preivece">
          <button onClick={preivece}>
            <FaArrowLeft />
          </button>
          <button>
            <FaArrowRight onClick={next} />
          </button>
        </div>
        <div className="midlle-elements">
          <button
            id="leftButton"
            className="hidden"
            ref={leftButton}
            onClick={preivece}
          >
            <FaArrowLeft />
          </button>
          <button
            id="rightButton"
            className="hidden"
            ref={rightButton}
            onClick={next}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
      <aside>
        <div>
          <h2>Kitabın Bilgileri</h2>
        </div>
        <div>
          {bookdata.map((items) => (
            <>
              <div key={items.id}>
                <p>Yazar: {items.author} </p>
                <p>Kategori: {items.categori} </p>
                <p>Dil: {items.langueg} </p>
                <p>Sayfa Sayısı: {items.pageNumber} </p>
                <p>Yayın Tarihi: {items.time.split(' ')[0]} </p>
              </div>
              <img src={`data:image/jpeg;base64,${items.conten}`} alt="" />
            </>
          ))}
        </div>
      </aside>

      <FaCog
        onClick={() => {
          setHandle((prev) => !prev);
          changeProps();
        }}
        className="setting-open"
      />

      <Footer />
    </div>
  );
};

export default ReadingPage;
