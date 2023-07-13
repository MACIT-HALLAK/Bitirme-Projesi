import React from 'react';
import './VerticalNavbar.css';
import { FaBook } from 'react-icons/fa';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';

const VerticalNavbar = (props) => {
  const [cookies] = useCookies(['email']);

  const email = cookies.email;

  const handleClick = (item) => {
    const title = item;
    console.log(title);
    let kitabId;
    const handleButtonClick = async (res) => {
      await props?.sendDataToParent([{ name: title, value: res }]);
    };
    axios
      .get(`https://librarygop.com/public/index.php/api/addbook/${title}`)
      .then((response) => {
        kitabId = response.data;
        console.log(kitabId);

        // İlk axios isteği başarılı olduğunda ikinci axios isteğini yapabiliriz
        axios
          .get(
            `https://librarygop.com/public/index.php/api/words_get/${email}/${kitabId}`
          )
          .then((response) => {
            // const kelimeler = response.data
            console.log(response.data);

            handleButtonClick(response.data);
          })
          .catch((error) => {
            console.error('Kelime  başarısız::', error);
          });
      })
      .catch((error) => {
        console.error('Kelime ekleme başarısız::', error);
      });
  };

  // item içinde bulunan verilere erişim sağlayabilirsiniz
  /*   const title = item;
    console.log(title)
    let kitabId;
    axios.get(`http://127.0.0.1:8000/api/addbook/${title}`)
    .then(response => {
      // İstek başarılı olduğunda yapılacak işlemler
      kitabId = response.data
      console.log(kitabId);
    })
        axios.get(`http://127.0.0.1:8000/api/words/${email}/${kitabId}`)
        .then(response => {
          // İstek başarılı olduğunda yapılacak işlemler
          const kitabId = response.data
          console.log(kitabId);
        })
    .catch(error => {
      // Hata durumunda yapılacak işlemler
      console.error("Kelime ekleme başarısız:", error);
    });*/

  return (
    <>
      <div className="vertical-navbar-layout">
        {props.class
          ? props.class.map((item) => (
              <button onClick={() => handleClick(item)}>
                {item}
                <FaBook className="book-icon" />
              </button>
            ))
          : ''}
      </div>
    </>
  );
};

export default VerticalNavbar;
