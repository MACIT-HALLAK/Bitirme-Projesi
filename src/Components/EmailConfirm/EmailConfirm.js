import React, { useState ,useRef, useEffect } from 'react';
import { FaEnvelopeOpenText } from "react-icons/fa";
import './EmailConfirm.css';
import { useCookies } from 'react-cookie';
import axios from 'axios';


const EmailConfirm = () => {


    const [cookies, setCookies] = useCookies('code');
    const [cookiesN, setCookiesN] = useCookies('name');
    const [cookiesE, setCookiesE] = useCookies('email1');
    const [cookiesP, setCookiesP] = useCookies('password');

    const [val1, setval1] = useState("");
    const [val2, setval2] = useState("");
    const [val3, setval3] = useState("");
    const [val4, setval4] = useState("");
    const [val5, setval5] = useState("");
    const inputs = useRef([]);

    const handleInputChange = (index, e) => {
    const value = e.target.value.replace(/\D/g, "");
    e.target.value = value;

    if (value.length === 1 && index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
        inputs.current[index - 1].focus();
    }
    };

useEffect(() => {
    inputs.current[0].focus(); // Sayfa yüklendiğinde input-1'e odaklanır
}, []);

    
    async function submit(event) {
        event.preventDefault();
        let cooky = cookies.code.toString().split("");
        if(val1 == cooky[0] && val2 == cooky[1] && val3 == cooky[2] && val4 == cooky[3] && val5 == cooky[4])
        {
           let res = await axios.post(
          'https://librarygop.com/public/index.php/api/register',
          {
            name: cookiesN.name,
            email: cookiesE.email1,
            role: 0,
            password: cookiesP.password,
          }
        );
       
       if (res.status === 200) {
      
        console.log(res.data);
        setCookies('email', cookiesP.email, { path: '/' });
        window.location.pathname = '/';
      
    }
            
    }else{
            window.location.pathname = '/Register';
            // console.log(cooky);
            // console.log(val1);
            // console.log(val2);
            // console.log(val3);
            // console.log(val4);
            // console.log(val5);

      }
   }
// Kullanıcı durumu değişkenlerini haritalayın ve değerleri atayın
const handleChange = (event, index) => {
  const newValue = event.target.value;
  switch (index) {
    case 0:
      setval1(newValue);
      break;
    case 1:
      setval2(newValue);
      break;
    case 2:
      setval3(newValue);
      break;
    case 3:
      setval4(newValue);
      break;
    case 4:
      setval5(newValue);
      break;
    default:
      break;
  }
};

  return (
    <div className="EmailVerify-parent">
        <div className="EmailVerify-icons"><FaEnvelopeOpenText size={48}/></div>
        <h2 className="EmailVerify-h2">Lütfen e-postanızı kontrol ediniz...</h2>
        <h5 className="EmailVerify-h5">Beş haneli kodu {cookiesE.email1} adresine gönderdik. İşlemi tamamlamak için lütfen kodu giriniz.</h5>
        {/* <form onSubmit={submit}>
            <input class="email-input" type="text" onChange={(e) => setval1(e.target.value)}></input>
            <input class="email-input" type="text" onChange={(e) => setval2(e.target.value)}></input>
            <input class="email-input" type="text" onChange={(e) => setval3(e.target.value)}></input>
            <input class="email-input" type="text" onChange={(e) => setval4(e.target.value)}></input>
            <input class="email-input" type="text" onChange={(e) => setval5(e.target.value)}></input>
            <button class="email-submit" type="submit" >submit</button>
        </form> */}
         <div className="EmailVerify-container">
        {[...Array(5)].map((_, index) => (
        <input
            className={`EmailVerify-input-${index + 1}`}
            type="text"
            maxLength={1}
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            onInput={(e) => handleInputChange(index, e)}
            onChange={(event) => handleChange(event, index)}        />
        ))}
        </div>
        <button type="submit" onClick={submit} className="EmailVerify-button">
        Doğrula
    </button>
    </div>
  )
}

export default EmailConfirm
