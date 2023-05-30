import React, { useState } from 'react';
import './Register.css';
import img from '../../Assets/images/4043260_avatar_male_man_portrait_icon.png';
import BackTo from '../BackTo/BackTo';
import axios from 'axios';
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

  async function submit(event) {
    event.preventDefault();
    setAccept(true);
    let flag = true;
    if (
      username === '' ||
      password.length < 8 ||
      confirmPassword !== password
    ) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post(
          'https://librarygop.com/public/index.php/api/register',
          {
            name: username,
            email: email,
            role: 0,
            password: password,
          }
        );
        if (res.status === 200) {
          window.localStorage.setItem('email', email);
          window.location.pathname = '/Login';
        }
      }
    } catch (err) {
      console.log(err);
    }

    if (username === '') {
      setShowPopup1(true);
    }
    if (email === '') {
      setShowPopup2(true);
    } else if (email.indexOf('@') === -1) {
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
    <div className="register-wraper">
      <BackTo />
      <div className="form-register-container">
        <div className="register-container">
          <img src={img} className="register-img" />
          <form className="register-form" onSubmit={submit}>
            <label className="register-label-1" htmlFor="username">
              Kullanıcı Adı:
            </label>
            <input
              className="register-input-1"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label className="register-label-2" htmlFor="email">
              E-posta:
            </label>
            <input
              className="register-input-2"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className="register-label-3" htmlFor="password">
              Şifre:
            </label>
            <input
              className="register-input-3"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label className="register-label-4" htmlFor="password-again">
              Şifre Tekrar:
            </label>
            <input
              className="register-input-4"
              type="password"
              id="password-again"
              name="password-again"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <button type="submit" className="register-button">
              Kayıt Ol
            </button>
          </form>

          {showPopup4 && (
            <div className="register-popup">
              <div className="register-popup-content">
                <h3 className="register-popup-text">Şifreler eşleşmiyor!</h3>
                <button
                  className="register-popup-button"
                  onClick={() => setShowPopup4(false)}
                >
                  OK
                </button>
              </div>
            </div>
          )}
          {showPopup1 && (
            <div className="register-popup">
              <div className="register-popup-content">
                <h3 className="register-popup-text">
                  Kullanıcı Adı boş olamaz!
                </h3>
                <button
                  className="register-popup-button"
                  onClick={() => setShowPopup1(false)}
                >
                  OK
                </button>
              </div>
            </div>
          )}
          {showPopup3 && (
            <div className="register-popup">
              <div className="register-popup-content">
                <h3 className="register-popup-text">
                  Şifreniz en az 8 karakter uzunluğunda olmalıdır !
                </h3>
                <button
                  className="register-popup-button"
                  onClick={() => setShowPopup3(false)}
                >
                  OK
                </button>
              </div>
            </div>
          )}
          {showPopup2 && (
            <div className="register-popup">
              <div className="register-popup-content">
                <h3 className="register-popup-text">
                  E-posta adresi geçersiz. Lütfen doğru e-posta adresi girin.
                </h3>
                <button
                  className="register-popup-button"
                  onClick={() => setShowPopup2(false)}
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
