import React, { useState } from 'react';
import './EmailConfirm.css';
import { useCookies } from 'react-cookie';


const EmailConfirm = () => {


    const [cookies, setCookies] = useCookies('code');
    const [val1, setval1] = useState("");
    const [val2, setval2] = useState("");
    const [val3, setval3] = useState("");
    const [val4, setval4] = useState("");
    const [val5, setval5] = useState("");

    
    async function submit(event) {
        event.preventDefault();
        let cooky = cookies.code.toString().split("");
        if(val1 == cooky[0] && val2 == cooky[1] && val3 == cooky[2] && val4 == cooky[3] && val5 == cooky[4])
        {
             window.location.pathname = '/';
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


  return (
    <div>
        <form onSubmit={submit}>
            <input class="email-input" type="text" onChange={(e) => setval1(e.target.value)}></input>
            <input class="email-input" type="text" onChange={(e) => setval2(e.target.value)}></input>
            <input class="email-input" type="text" onChange={(e) => setval3(e.target.value)}></input>
            <input class="email-input" type="text" onChange={(e) => setval4(e.target.value)}></input>
            <input class="email-input" type="text" onChange={(e) => setval5(e.target.value)}></input>
            <button class="email-submit" type="submit" >submit</button>
        </form>
    </div>
  )
}

export default EmailConfirm