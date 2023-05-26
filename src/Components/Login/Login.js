import './Login.css';
import img from '../../Assets/images/4043260_avatar_male_man_portrait_icon.png';
import BackTo from '../BackTo/BackTo';
import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [cookies, setCookies] = useCookies(['email']);
    const [showPopup, setShowPopup] = useState(false);
async function submit(event) {
    event.preventDefault();
    let flag = true;
    if (password.length < 8) {
        flag = false;
    }

    try {
        if (flag) {
        let res = await axios.post(
            `https://librarygop.com/public/index.php/api/login/${email}/${password}`
        );
        if (res.data === 'başarılı bir şekilde giriş yapıldı') {
            setCookies('email', email, { path: '/' });
            window.location.pathname = '/';
        }
        else {
            setShowPopup(true);
        }
    }
    } catch (err) {
        console.log(err);
    }
  }

return (
    <div className="login-wraper">
        <BackTo />
        <div className="form-login-container">
            <div className="login-container">
            <img src={img} className="login-img" />
            <form className="login-form" onSubmit={submit}>
                <label className="login-label-1" htmlFor="email">E-posta:</label>
                <input className="login-input-1" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
                <label className="login-label-2" htmlFor="password">Şifre:</label>
                <input className="login-input-2" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}required/>
                <button type="submit" className="login-button">Giriş Yap</button>
            </form>
            {showPopup && (
                    <div className="login-popup">
                        <div className="login-popup-content">
                            <h3 className="login-popup-text">Kullanıcı Adı Yada Şifreniz Hatalıdır!</h3>
                            <button className="login-popup-button" onClick={() => setShowPopup(false)}>OK</button>
                        </div>
                    </div>
                
                )}
            </div>
        </div>
    </div>
);
};

export default Login;





