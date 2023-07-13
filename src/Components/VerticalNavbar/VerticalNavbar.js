import React from 'react'
import './VerticalNavbar.css';
import {FaBook} from "react-icons/fa"
import axios from 'axios';
import { useCookies } from 'react-cookie';
const VerticalNavbar = (props) => {
  const [cookies] = useCookies(['email']);
  const email = cookies.email;

  const handleClick = (item) => {
    // item içinde bulunan verilere erişim sağlayabilirsiniz
    const title =item;
    console.log(title)

    axios.get(`https://librarygop.com/public/index.php/api/addbook/${title}`)
    .then(response => {
      // İstek başarılı olduğunda yapılacak işlemler
      console.log(response.data);
    })
    .catch(error => {
      // Hata durumunda yapılacak işlemler
      console.error("Kelime ekleme başarısız:", error);
    });

    // Verileri başka bir işleme tabi tutabilir veya başka bir işlevi çağırabilirsiniz.
    // ...
  };
  
  return (
    <div className='vertical-navbar-layout'>
  {props.class ? props.class.map((item) => (
    <button onClick={() => handleClick(item)}>
      {item}
      <FaBook className='book-icon' />
    </button>
  )) : ""}
</div>

  )
}

export default VerticalNavbar