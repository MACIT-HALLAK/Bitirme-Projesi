import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navber';
import book_img from '../../Assets/images/si1.webp';
import './ReadingPage.css';
import {
  FaArrowLeft,
  FaArrowRight,
  FaLanguage,
  FaCog,
  FaRegEdit,
} from 'react-icons/fa';
import SettingCom from '../Ayarlar/SettingCom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReadingPage = () => {
  const [value, setValue] = useState('');
  const [handle, setHandle] = useState(false);

  const pa = useRef();
  //******************* */
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
  //--------------------------------------------------

  const wordAdd = () => {
    console.log(selection);
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
      } else {
        pa.current.style.color =
          prop_obj?.color !== 'null' ? prop_obj?.color : 'black';
        pa.current.style.fontFamily =
          prop_obj?.font !== 'null' ? prop_obj?.font : 'Sans-Serif';
        pa.current.style.fontSize =
          prop_obj?.size !== 'null' ? prop_obj?.size : '16px';
      }
    }, 150);
  }
  useEffect(() => {
    changeProps();
  }, []);
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
                <FaRegEdit />
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
        <p ref={pa}>
          I have found that it is best to deal with the meaning of the verb that
          is salient in the text. If the meaning of the verb in focus is to
          'reject', then I teach this meaning, without going into the other
          possible meanings. I find this approach to be clearer and less
          confusing for students. Richards states that "Knowing a word means
          knowing its different meanings (polysemy)." This is certainly our aim
          in teaching, but we must realise that such competence requires time.
          It is only through reading, exposing learners to texts rich in
          multi-word verbs, that learners will become lexically competent. "The
          learner must be allowed I have found that it is best to deal with the
          meaning of the verb that is salient in the text. If the meaning of the
          verb in focus is to 'reject', then I teach this meaning, without going
          into the other possible meanings. I find this approach to be clearer
          and less confusing for students. Richards states that "Knowing a word
          means knowing its different meanings (polysemy)." This is certainly
          our aim in teaching, but we must realise that such competence requires
          time. such competence requires time. such competence requires time.
          such competence requires time. such competence requires time. It is
          only through reading, exposing learners to texts rich in multi-word
          verbs, that learners will become lexically competent. "The learner
          must be allowed to be vague about meaning at first; precision will
          come later". (Judd, quoted in Carter and McCarthy) to be vague about
          meaning at first; precision will come later". (Judd, quoted in Carter
          and McCarthy)
          <span>5</span>
        </p>
        <div className="next-preivece">
          <button>
            <FaArrowLeft />
          </button>
          <button>
            <FaArrowRight />
          </button>
        </div>
      </section>
      <aside>
        <div>
          <h2>kitabin bilgileri</h2>
        </div>

        <div>
          <div>
            <p>yazar: iyad al qinabi </p>
            <p>bolum: din </p>
            <p>dil: arpca </p>
            <p>kac sayfa: 232 </p>
            <p>yayin tarihi: 20/5/2014 </p>
          </div>
          <img src={book_img} alt="" />
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
