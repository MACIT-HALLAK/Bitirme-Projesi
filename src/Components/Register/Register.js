import React, { useState } from 'react'
import './Register.css'
import img from '../../Assets/images/4043260_avatar_male_man_portrait_icon.png';

const Register = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [accept, setAccept] = useState(false);
const [showPopup1, setShowPopup1] = useState(false);
const [showPopup2, setShowPopup2] = useState(false);
const [showPopup3, setShowPopup3] = useState(false);
const [showPopup4, setShowPopup4] = useState(false);


function submit (event) {
    event.preventDefault();
    setAccept(true);
    if(username === ""){
        setShowPopup1(true)
    }
    if (email === "") {
        setShowPopup2(true);
    } else if (email.indexOf("@") === -1) {
        setShowPopup2(true);
    }
    if (password.length < 8) {
        setShowPopup3(true);
    }
    
    if (confirmPassword !== password) {
        setShowPopup4(true);
    } 
}

return (
    
    <div className='register-wraper'>
        
        <div className="form-register-container">
            
            <div className = "register-container">
                
                <img src={img} className="register-img"/>
                    <form className="register-form" onSubmit={submit}>
                        <label className="register-label" htmlFor="username">Kullanıcı Adı:</label>
                        <input className="register-input"
                            type="text" 
                            id="username" 
                            name="username" 
                            value={username}
                            onChange={event => setUsername(event.target.value)} 
                        />
                        <label className="register-label" htmlFor="email">E-posta:</label>
                        <input className="register-input" 
                            type="text"
                            id="email" 
                            name="email"
                            value={email} 
                            onChange={event => setEmail(event.target.value)} 
                        />
                        <label className="register-label" htmlFor="password">Şifre:</label>
                        <input className="register-input" 
                            type="password" 
                            id="password" 
                            name="password"
                            value={password} 
                            onChange={event => setPassword(event.target.value)} 
                        />
                        <label className="register-label" htmlFor="password-again">Şifre Tekrar:</label>
                        <input className="register-input" 
                            type="password" 
                            id="password-again" 
                            name="password-again"
                            value={confirmPassword} 
                            onChange={event => setConfirmPassword(event.target.value)} 
                        />
                        <button type="submit"  className="register-button">Kayıt Ol</button>
                    </form>
                
                {showPopup4 && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3 className="popup-text">Şifreler eşleşmiyor!</h3>
                            <button className="popup-button" onClick={() => setShowPopup4(false)}>OK</button>
                        </div>
                    </div>
                
                )}
                {showPopup1 && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3 className="popup-text">Kullanıcı Adı boş olamaz!</h3>
                            <button className="popup-button" onClick={() => setShowPopup1(false)}>OK</button>
                        </div>
                    </div>
                
                )}
                {showPopup3 && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3 className="popup-text">Şifreniz en az 8 karakter uzunluğunda olmalıdır !</h3>
                            <button className="popup-button" onClick={() => setShowPopup3(false)}>OK</button>
                        </div>
                    </div>
                
                )}
                {showPopup2 && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3 className="popup-text">E-posta adresi geçersiz. Lütfen doğru e-posta adresi girin.</h3>
                            <button className="popup-button" onClick={() => setShowPopup2(false)}>OK</button>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
        
    </div>
    )
}

export default Register