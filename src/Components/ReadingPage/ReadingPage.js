import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navber";
import book_img from "../../Assets/images/si1.webp";
import "./ReadingPage.css";
import { FaArrowLeft, FaArrowRight, FaLanguage } from "react-icons/fa";

const ReadingPage = () => {
  const [value, setValue] = useState("");

  //secilen metini almak icin
  //
  //--------------------------------------------------

  var pageX, pageY;
  document.addEventListener("mouseup", () => {
    function translate() {
      var field = document.getElementById("output");
      field.focus();
      field.setSelectionRange(0, field.value.length);
      // burasi elde edilen deger apie gonderilecek cevirmek icin
    }

    let selection = document.getSelection();
    let selectedText = selection.toString();
    var menu = document.querySelector(".menu");
    if (selectedText !== "") {
      // let rect = document.querySelector(".text").getBoundingClientRect();
      let rect = selection.getRangeAt(0).getBoundingClientRect();
      menu.style.display = "block";
      menu.style.left = `calc(${rect.left}px + calc(${rect.width}px / 2) - 40px)`;
      menu.style.top = `calc(${rect.top}px - 48px)`;
      // console.log(pageX);
      document.getElementById("output").innerHTML = selectedText;
      setValue(selectedText);
      var popup = document.getElementById("mypopup");
      var translatebtn = document.getElementById("copy-btn");

      translatebtn.addEventListener("click", () => {
        translate();
        popup.style.display = "block";
      });

      var span = document.getElementsByClassName("close-btn")[0];

      span.addEventListener("click", () => {
        popup.style.display = "none";
      });

      window.addEventListener("click", (event) => {
        if (event.target == popup) {
          popup.style.display = "none";
        }
      });
    } else {
      menu.style.display = "none";
    }
  });
  document.addEventListener("mousedown", (e) => {
    pageX = e.pageX;
    pageY = e.pageY;
  });

  //--------------------------------------------------

  return (
    <div className="reading-container">
      <Navbar />
      <section className="text">
        <p>
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
          <div className="menu">
            <i id="copy-btn">
              <FaLanguage />
            </i>
            <h4>ezberleme sayfasina ekle</h4>
            <h4>ozet sayfasina ekle</h4>
          </div>
          <textarea id="output"></textarea>
          <div id="mypopup" className="popup">
            <div className="popup-content">
              <p>{value}</p>
              <span className="close-btn">×</span>
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

      <Footer />
    </div>
  );
};

export default ReadingPage;
