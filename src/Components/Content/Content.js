import React, { useEffect, useRef, useState } from 'react';
import './Content.css';
import { Link } from 'react-router-dom';
import lib from '../../Assets/images/library.png';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Content({ items }) {
  const [name, setName] = useState();
  const [cookiesE, setCookiesE] = useCookies('email');
  const conName = useRef();
  const [contentName, setcontentName] = useState(false);

  useEffect(() => {
    loadName();
    setTimeout(() => {
      setcontentName(true);
    }, 500);
  }, []);
  const loadName = async () => {
    const res = await axios.get(
      `https://deneme.librarygop.com/public/index.php/api/getusername/${cookiesE.email}`
    );
    setName(res.data);
    console.log(res.data);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    if (newIndex < 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % items.length);
    }, 3000); // تغيير الشريحة كل 3 ثوان
    return () => clearInterval(interval); // تنظيف عند فك تحميل المكون
  }, [currentIndex, items]);

  return (
    <div className="content-main">
      <div className="text-box slider">
        {name ? (
          <p>
            Merhaba{' '}
            <strong
              className={`${contentName ? 'content-name active' : ''} `}
              ref={conName}
            >
              {contentName ? `${name}` : ''}
            </strong>
          </p>
        ) : (
          ''
        )}

        <p>EJIYAL Kütüphanesine Hoşgeldiniz</p>
        <img className="content-logo" src={lib} />
        <div className="footer-row">
          {items.map((item, index) => (
            <div
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              key={index}
            >
              {item}
            </div>
          ))}

          <button className="slider-btn prev" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
          <button className="slider-btn next" onClick={nextSlide}>
            <FaArrowRight />
          </button>
          {/* <button className="slider-btn prev" onClick={prevSlide}>
              Previous
            </button>
            <button className="slider-btn next" onClick={nextSlide}>
              Next
            </button> */}
        </div>
      </div>
    </div>
  );
}
