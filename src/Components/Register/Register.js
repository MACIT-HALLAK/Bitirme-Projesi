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
  const [showPopup, setShowPopup] = useState(false);

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
          window.location.pathname = '/';
        }
      }
    } catch (err) {
      console.log(err);
    }

    if (username === '') {
      setShowPopup(true);
      setTimeout(() => {
        document.querySelector('#popup-text').textContent =
          'Kullanıcı Adı boş olamaz!';
      }, 100);
    } else if (email === '') {
      setShowPopup(true);
      setTimeout(() => {
        document.querySelector('#popup-text').textContent = 'Email boş olamaz!';
      }, 100);
    } else if (email.indexOf('@') === -1) {
      setShowPopup(true);
      setTimeout(() => {
        document.querySelector('#popup-text').textContent =
          'E-posta adresi geçersiz. Lütfen doğru e-posta adresi girin.';
      }, 100);
    } else if (password.length < 8) {
      setShowPopup(true);
      setTimeout(() => {
        document.querySelector('#popup-text').textContent =
          'Şifreniz en az 8 karakter uzunluğunda olmalıdır !';
      }, 100);
    } else if (confirmPassword !== password) {
      setShowPopup(true);
      setTimeout(() => {
        document.querySelector('#popup-text').textContent =
          'Şifreler eşleşmiyor!';
      }, 100);
    }
  }

  return (
    <div className="register-wraper">
      <BackTo path={'Login'} />
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

          {showPopup && (
            <div className="register-popup">
              <div className="register-popup-content">
                <h3 className="register-popup-text" id="popup-text"></h3>
                <button
                  className="register-popup-button"
                  onClick={() => setShowPopup(false)}
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
