import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navber';
import book_img from '../../Assets/images/si1.webp';
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

const ReadingPage = () => {

  let {bookId} = useParams();
  const [bookdata,setBookdata] = useState([]);
  //veritabanindan kitabi cekmek
  const loadData = async()=>{
      const res = await axios.get(`https://librarygop.com/public/index.php/api/getbook/${bookId}`);
      setBookdata(res.data);

      
;
  }

  const [nextP, setNextP] = useState(0);
  const [prevP, setPrevP] = useState(0);

  const [value, setValue] = useState('');
  const [handle, setHandle] = useState(false);

  //******************* */
  const [cookies] = useCookies(['email']);
  const email = cookies.email;
  const [selection, setSelection] = useState(null);
  const [showIcon, setShowIcon] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  //*****************varibalese for tarnslate text  */
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('ar');
  const [input, setInput] = useState('');
  const [outPut, setOutput] = useState('');

  //secilen metini almak icin
  //
  const handleSelection = () => {
    setShowModal(false);
    const selectionText = window.getSelection().toString();
    if (selectionText && selectionText != ' ') {
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
  //--------------------------------------------------
  const handleIconClick = () => {
    setShowIcon(false);
    setShowModal(true);
    translate();
  };
  //------------------------------------------------

  const wordAdd = () => {
  axios.post(`https://librarygop.com/public/index.php/api/words/${email}/${bookId}/${selection}`)
    .then(response => {
      // İstek başarılı olduğunda yapılacak işlemler
      console.log(bookId);
      console.log("Kelime eklendi:", response.data);
    })
    .catch(error => {
      // Hata durumunda yapılacak işlemler
      console.error("Kelime ekleme başarısız:", error);
    });
};

  const quoteAdd = () => {
    console.log(selection);
  };
  const translate = () => {
    let apiurl = `https://api.mymemory.translated.net/get?q=${input}&langpair=${from}|${to}`;

    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOutput(data.responseData.translatedText);
      });
  };

  // ----------------------Start change props of text--------------------------
  function changeProps() {
    setTimeout(() => {
      let element_arr = [];

      let prop_obj = JSON.parse(localStorage.getItem('props_arr'));
      if (localStorage.getItem('props_arr')) {
        let all_props = document.querySelectorAll('.items-box span');
        all_props.forEach((element) => {
          let my_prop = element.getAttribute('prop');
          // console.log(my_prop);
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
      }
      document.querySelector('.text p').style.color =
        prop_obj.color !== 'null' ? prop_obj.color : 'black';
      document.querySelector('.text p').style.fontFamily = prop_obj.font;
      document.querySelector('.text p').style.fontSize = prop_obj.size + 'px';
    }, 1000);
  }
  useEffect(() => {
    changeProps();
    loadData();
  }, []);
  const next =()=>{
    bookdata.map((item)=>{
      if(nextP +1 < item.content.split('$').length){
        setNextP(nextP+1);
      }
      else{
        setNextP(nextP);
      }
    })
  }
  const preivece =()=>{
    if(nextP != 0)
    setNextP(nextP-1);
  }
  // ----------------------End change props of text--------------------------

  return (
    <div className="reading-container">
      <Navbar />
      {handle && (
        <>
          <SettingCom
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
            {/* <img src="icon.png" alt="icon" onClick={handleIconClick} /> */}
            <button
              className="trans-btn"
              style={{ fontSize: '30px', zIndex: 10, cursor: 'pointer' }}
              onClick={handleIconClick}
            >
              <FaLanguage />{' '}
            </button>
            {/* <i id="copy-btn"   ></i> */}
            <div>
              <button onClick={wordAdd}> Kelime Ekle </button>
              <Link to="/WordsPage">
                <FaRegEdit  />
              </Link>
            </div>
            <div>
              <button onClick={quoteAdd}>Alıntı Ekle </button>
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
              // margin: 'auto',
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
            <p>{outPut}</p>
            <p>{selection}</p>
          </div>
        </Modal>
        
       
        {bookdata.map((item)=>{
         const newData = item.content.split("$");
         const dataNew = newData[nextP].split('#');
         return(<p className="reading-page-dir" direc={item.langueg}>
          
           <span className='page-title'>{dataNew.length >1 ? dataNew[0]:""}</span>
           {dataNew.length >1 ? dataNew[1]: dataNew[0]}
            <span className='navigation-items'>{nextP+1}</span>
        </p>)
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
          <h2>kitabin bilgileri</h2>
        </div>
      <div>
        {bookdata.map((items)=>
                <>
                <div>      
                    <p>Yazar: {items.author} </p>
                    <p>Categori: {items.categori} </p>
                    <p>Dil: {items.langueg} </p>
                    <p>Sayfa Sayısı: {items.pageNumber} </p>
                    <p>Yayın Tarihi: {items.time.split(' ')[0]} </p>
                </div>
                <img src={`data:image/jpeg;base64,${items.conten}`} alt="" />
                </>
            )}

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
