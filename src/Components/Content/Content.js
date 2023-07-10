import React, { useEffect, useState } from "react";
import "./Content.css";
import { Link } from "react-router-dom";
import lib from '../../Assets/images/library.png'
import axios from "axios";
import { useCookies } from 'react-cookie';

export default function Content() {

  const [name,setName] = useState();
  const [cookiesE, setCookiesE] = useCookies('email');

  useEffect(()=>{
    loadName();
  },[])
  const loadName = async()=>{
   const res = await axios.get(`http://127.0.0.1:8000/api/getusername/${cookiesE.email}`)
   setName(res.data);
    console.log(res.data);
  }
  return (
    <div className="content-main">
     
      <div className="text-box">
        {name?<p>Merhaba <span className="content-name">{name}</span></p>:""}
          
          <p>EJIYAL Kütüphanesine Hoşgeldiniz</p>
       <img className="content-logo" src={lib} />
        <div className="footer-row">
          {/* <a className="btn btn-first">En Çok Okunan</a> */}
          <Link to='/ReadingPage' className="btn btn-second">En Çok Okunan</Link>
          <Link to='/BookPage' className="btn btn-second">Kitablar</Link>
          <Link to='/Categories' className="btn btn-second">Bölümler</Link>
          {/* <a className="btn btn-second">Kitablar</a> */}
          {/* <a className="btn btn-third">Bölümler</a> */}
        </div>
      </div>
    </div>
  );
}
