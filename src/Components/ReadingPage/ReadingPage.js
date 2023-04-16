import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navber'
import book_img from "../../Assets/images/si1.webp";
import "./ReadingPage.css";
import { FaArrowLeft, FaArrowRight, FaLanguage, FaCog } from "react-icons/fa";
import SettingCom from "../Ayarlar/SettingCom";

const ReadingPage = () => {
  const [value, setValue] = useState("");
  const [handle, setHandle] = useState(false);

  //******************* */
  const [selection, setSelection] = useState(null);
  const [showIcon, setShowIcon] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);


//secilen metini almak icin
// 
const handleSelection = () => {
  const selectionText = window.getSelection().toString();
  if (selectionText) {
    setSelection(selectionText);
    const selectionRange = window.getSelection().getRangeAt(0);
    const rangeRect = selectionRange.getBoundingClientRect();
    const iconX = `calc(${rangeRect.left}px + calc(${rangeRect.width}px / 2) - 40px)`;
    const iconY = `calc(${rangeRect.bottom}px + 5px)`;
    setIconPosition({ x: iconX, y: iconY });
    setShowIcon(true);
  } else {
    setSelection(null);
    setShowIcon(false);
  }
};
//--------------------------------------------------
const handleIconClick = () => {
  setShowIcon(false);
  setShowModal(true);
};
//--------------------------------------------------


  //--------------------------------------------------

  // ----------------------Start change props of text--------------------------
  function changeProps() {
    setTimeout(() => {
      let element_arr = [];

      let prop_obj = JSON.parse(localStorage.getItem("props_arr"));
      if (localStorage.getItem("props_arr")) {
        let all_props = document.querySelectorAll(".items-box span");
        all_props.forEach((element) => {
          let my_prop = element.getAttribute("prop");
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
          set_active.classList.add("active");
        });
      }
      document.querySelector(".text p").style.color = prop_obj.color;
      document.querySelector(".text p").style.fontFamily = prop_obj.font;
      document.querySelector(".text p").style.fontSize = prop_obj.size + "px";
    }, 150);
  }
  useEffect(() => {
    changeProps();
  }, []);
  // ----------------------End change props of text--------------------------

  return (
    <div className='reading-container' >
        <Navbar />
       <section className='text' onMouseUp={handleSelection}>
       {showIcon && (
        <div  style={{ position: 'absolute', left: iconPosition.x, top: iconPosition.y ,zIndex:1}}>
          {/* <img src="icon.png" alt="icon" onClick={handleIconClick} /> */}
          <button  style={{ fontSize: '30px', zIndex: 10,cursor: 'hand' }} onClick={handleIconClick}><FaLanguage  /> </button>
          <i id="copy-btn"   ></i>
        
        </div>
      )}
      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false) }  
       overlayClassName="custom-overlay"
      style={{
          content: {
            maxWidth: 'fit-content' ,
            height: 'fit-content',
            margin: 'auto',
           
            
          },
        }}>
        <div>{selection}</div>
      </Modal>
        <p>
        I have found that it is best to deal with the meaning of the verb that is salient in the text. If the meaning of the verb in focus is to 'reject', 
        then I teach this meaning, without going into the other possible meanings. I find this approach to be clearer and less confusing for students.
        Richards states that "Knowing a word means knowing its different meanings (polysemy)." This is certainly our aim in teaching, but we must realise that 
        such competence requires time.
        It is only through reading, exposing learners to texts rich in multi-word verbs, that learners will become lexically competent. "The learner must be allowed 
        I have found that it is best to deal with the meaning of the verb that is salient in the text. If the meaning of the verb in focus is to 'reject', 
        then I teach this meaning, without going into the other possible meanings. I find this approach to be clearer and less confusing for students.
        Richards states that "Knowing a word means knowing its different meanings (polysemy)." This is certainly our aim in teaching, but we must realise that 
        such competence requires time.
        such competence requires time.
        such competence requires time.
        such competence requires time.
        such competence requires time.
        It is only through reading, exposing learners to texts rich in multi-word verbs, that learners will become lexically competent. "The learner must be allowed 
        to be vague about meaning at first; precision will come later". (Judd, quoted in Carter and McCarthy)
        to be vague about meaning at first; precision will come later". (Judd, quoted in Carter and McCarthy)
        <span>5</span>


        {/* <div className="menu">
        <i id="copy-btn"><FaLanguage /></i>
        <h4>ezberleme sayfasina ekle</h4>
        <h4>ozet sayfasina ekle</h4>
        
      </div>
      <textarea id="output"></textarea>
      <div id="mypopup" className="popup">
        <div className="popup-content">
          <p>{value}</p>
          <span className="close-btn">×</span>
        </div>
      </div> */}


        </p>
        <div className='next-preivece'>
        <button><FaArrowLeft /></button>
        <button><FaArrowRight/></button>
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
          </div>
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
