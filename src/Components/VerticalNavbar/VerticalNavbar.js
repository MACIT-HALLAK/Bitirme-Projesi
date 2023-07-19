import React from 'react';
import './VerticalNavbar.css';
import { FaBook } from 'react-icons/fa';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useState, useEffect, useMemo } from 'react';

const VerticalNavbar = (props) => {
  
  const [activeItem, setActiveItem] = useState(null);
  const [marginApplied, setMarginApplied] = useState(false);
  

  const [cookies] = useCookies(['email']);
  const c = props.class[0];
  //console.log(props.class[0])
  const email = cookies.email;

  const handleClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
    setMarginApplied(!marginApplied);

    const title = item;
    //console.log(title);
    let kitabId;
    const handleButtonClick = async (res) => {
      await props?.sendDataToParent([{ name: title, value: res }]);
      const d = props.sendDataToParent;
      //console.log(d);
    };
    axios
      .get(`https://librarygop.com/public/index.php/api/addbook/${title}`)
      .then((response) => {
        kitabId = response.data;
        //console.log(kitabId);

        // İlk axios isteği başarılı olduğunda ikinci axios isteğini yapabiliriz
        axios
          .get(
            `https://librarygop.com/public/index.php/api/words_get/${email}/${kitabId}`
          )
          .then((response) => {
            //console.log(response.data);
            handleButtonClick(response.data);
          })
          .catch((error) => {
            console.error('hata oluştu ::', error);
          });
      })
      .catch((error) => {
        console.error('hata oluştu ::', error);
      });
  };
  
  useEffect(() => {
    handleClick(c);
  }, [c]);


  return (
    //{`vertical-navbar-layout ${margin: item === activeItem ? '0vh 0vw 9vh' : '0vh'}`}
    <>
      <div className="vertical-navbar-layout" >
        {props.class
          ? props.class.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`nav-button ${item === activeItem ? 'active' : ''}`}
              >
                {item}
                <div
                  className={`kelimeler ${item === activeItem ? 'active' : ''}`}
                  style={{ top: item === activeItem ? '8vh' : '0', display: item === activeItem ? 'block' : 'none'  ,position: 'absolute' }}
                >
                  kelimeler
                </div>
                <div
                  className={`alintilar ${item === activeItem ? 'active' : ''}`}
                  style={{ top: item === activeItem ? '12vh' : '0', display: item === activeItem ? 'block' : 'none', position: 'absolute' }}
                >
                  alintilar
                </div>
                <FaBook className="book-icon" />
              </button>
            ))
          : ''}
      </div>
    </>
  );
};

export default VerticalNavbar;