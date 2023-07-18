import React from 'react';
import './VerticalNavbar.css';
import { FaBook } from 'react-icons/fa';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const VerticalNavbar = (props) => {
  const [cookies] = useCookies(['email']);
  const booksData = props.class;
  console.log(booksData);
  const c = props.class[0];
  //console.log(props.class[0])
  const email = cookies.email;

  const handleClick = (item) => {
    const title = item;
    //console.log(title);
    let kitabId;
    const handleButtonClick = async (res) => {
      await props?.sendDataToParent([{ name: title, value: res }]);
      const d = props.sendDataToParent;
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
