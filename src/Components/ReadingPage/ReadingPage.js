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
import Swal from 'sweetalert2';

const ReadingPage = () => {
  let { bookId } = useParams();
  const pa = useRef();
  const [bookdata, setBookdata] = useState([]);
  const control = '';
  // Kitabı veritabanından çekme
  const loadData = async () => {
    const res = await axios.get(
      `https://librarygop.com/public/index.php/api/getbook/${bookId}`
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

  // Seçili metni alma
  const handleSelection = () => {
    setShowModal(false);
    const selectionText = window.getSelection().toString();
    if (selectionText && selectionText !== ' ') {
      setSelection(selectionText);
      const selectionRange = window.getSelection().getRangeAt(0);

      const rangeRect = selectionRange.getBoundingClientRect();
      console.log(rangeRect);
      const iconX = `calc(${rangeRect.left}px + calc(${rangeRect.width}px / 2) - 40px)`;
      const iconY = `calc(${rangeRect.bottom}px + calc(${rangeRect.width}px / 2) - 5px)`;

      setIconPosition({ x: iconX, y: iconY });
      setShowIcon(true);
      setInput(selection);
    } else {
      setSelection(null);
      setShowIcon(false);
    }
  };

  const handleIconClick = () => {
    setShowIcon(false);
    setShowModal(true);
    translate();
  };
  
  const wordAdd = () => {
   
        axios.get(
          `https://librarygop.com/public/index.php/api/words_control/${email}/${bookId}/${selection}`
        )
        .then(response => {
          console.log(response.data.success);
          let control = response.data.success;
          if(control === true)
          {
            Swal.fire({
              icon: 'error',
              title: 'Kelime Mevcut!',
              text: 'Seçtiğiniz kelime daha önceden eklenmiş',
              footer: '<a href="http://localhost:3000/WordsPage">Eklediğim Kelimelerim Göster...</a>'
            })
          }

          if(control === false)
          {
                const words = selection.split(' ').filter(word => word.trim() !== '');
                if (words.length > 1) 
                {
                  // Sadece 1 kelimeden fazla ise API isteğini gerçekleştirme
                  Swal.fire({
                    icon: 'error',
                    title: 'Sadece bir kelime ekleyebilirsiniz!',
                    text: 'Eğer bir alıntı eklemek isterseniz lütfen alıntınız seçin alıntı ekle buttonuna basınız',
                  })
                  //console.log('Sadece 1 kelimeden ez seçim yapabilirsiniz.');
                  
                }
                else
                {
                    axios.post(
                      `https://librarygop.com/public/index.php/api/word_set/${email}/${bookId}/${selection}`
                    )
                    .then(res => {
                      //console.log('Kelime eklendi:', response.data);
                      Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Kelime Eklendi',
                        showConfirmButton: false,
                        timer: 1500
                      });
                    })
                    .catch(error => {
                      //console.error('Kelime ekleme başarısız:', error);
                    });
                    
                }
          }
        })
    
  };
  const quoteAdd = () => {
    axios.get(
      `https://librarygop.com/public/index.php/api/words_control/${email}/${bookId}/${selection}`
    )
    .then(response => {
      //console.log(response.data.success);
      let control = response.data.success;
      if(control === true)
      {
        Swal.fire({
          icon: 'error',
          title: 'Alıntınız Mevcut!',
          text: 'Seçtiğiniz Alıntınızı daha önceden eklenmiş',
          footer: '<a href="http://localhost:3000/WordsPage">Eklediğim Kelimelerim Göster...</a>'
        })
      }

      if(control === false)
      {
        const words = selection.split(' ').filter(word => word.trim() !== '');
        if (words.length > 1) {
          axios.post(
            `https://librarygop.com/public/index.php/api/words_set/${email}/${bookId}/${selection}`
          )
          .then(response => {
            //console.log('Alıntınız eklendi:', response.data);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Alıntınız Eklendi',
              showConfirmButton: false,
              timer: 2000
            });
          })
          .catch(error => {
            console.error('Alıntınız eklemeyi başarısız:', error);
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Alıntınız eklemeyi başarısız',
              showConfirmButton: false,
              timer: 2000
            });
          });
          
            
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Burada Sadece bir Alıntı ekleyebilirsiniz!',
                text: 'Eğer tek bir kelime eklemek isterseniz lütfen kelimenizi seçin kelime ekle buttonuna basınız',
              })
            }
      }
    })
  }
  
  const translate = () => {
    let apiurl = `https://api.mymemory.translated.net/get?q=${input}&langpair=${from}|${to}`;

    fetch(apiurl)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOutput(data.responseData.translatedText);
      });
  };

  // ------------------ Metin özelliklerini değiştirme ---------------------
  async function changeProps() {
    setTimeout(() => {
      let element_arr = [];

      let prop_obj = JSON.parse(localStorage.getItem('props_arr'));
      console.log(prop_obj);
      if (localStorage.getItem('props_arr')) {
        let all_props = document.querySelectorAll('.items-box span');
        all_props.forEach(element => {
          let my_prop = element.getAttribute('prop');
          if (
            my_prop === prop_obj.color ||
            my_prop === prop_obj.font ||
            my_prop === prop_obj.size
          ) {
            element_arr.push(element);
          }
        });
        element_arr.forEach(set_active => {
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
    bookdata.map(item => {
      if (nextP + 1 < item.content.split('$').length) {
        setNextP(nextP + 1);
      } else {
        setNextP(nextP);
      }
    });
  };

  const preivece = () => {
    if (nextP !== 0) setNextP(nextP - 1);
  };
  // ------------------ Metin özelliklerini değiştirme ---------------------

  return (
    <div className="reading-container">
      <Navbar />
      {handle && (
        <>
          <SettingCom
            clicking={() => {
              setHandle(prev => !prev);
            }}
            show={'show'}
            handle={handle}
            className="show"
          />
          <div className="mask"></div>
        </>
      )}
      <section className="text" onMouseUp={handleSelection}>
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
              <Link to="/QuotePage">
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
              position: 'absolute',
              left: iconPosition.x,
              top: iconPosition.y,
              zIndex: 1,
              color: 'var(--text-color)',
              direction: 'rtl',
            },
          }}
        >
          <div>
            <p>{output}</p>
            <p>{selection}</p>
          </div>
        </Modal>

        {bookdata.map(item => {
          const newData = item.content.split('$');
          const dataNew = newData[nextP].split('#');
          return (
            <p className="reading-page-dir" ref={pa} direc={item.langueg}>
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
      </section>
      <aside>
        <div>
          <h2>Kitabın Bilgileri</h2>
        </div>
        <div>
          {bookdata.map(items => (
            <>
              <div>
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
          setHandle(prev => !prev);
          changeProps();
        }}
        className="setting-open"
      />

      <Footer />
    </div>
  );
};

export default ReadingPage;
